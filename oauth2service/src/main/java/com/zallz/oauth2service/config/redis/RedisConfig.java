package com.zallz.oauth2service.config.redis;
import java.lang.reflect.Method;
import java.time.Duration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.cache.RedisCacheWriter;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisNode;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.RedisServer;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import lombok.extern.slf4j.Slf4j;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.JedisSentinelPool;

@Configuration
@Slf4j
@EnableCaching
public class RedisConfig extends CachingConfigurerSupport{

	@Value("${spring.redis.host}")
    private String host;
    @Value("${spring.redis.timeout}")
    private int timeout;
    @Value("${spring.redis.sentinel.master}")
    private String master;
    @Value("${spring.redis.port}")
    private int port;
    @Value("${spring.redis.sentinel.nodes}")
    private String Sentinels;
    @Value("${spring.redis.pool.max-active}")
    private int maxActive;
    @Value("${spring.redis.database}")
    private int database;
    @Value("${spring.redis.pool.max-idle}")
    private int maxIdle;
    @Value("${spring.redis.pool.min-idle}")
    private int minIdle;
    @Value("${spring.redis.pool.max-wait}")
    private long maxWait;
    @Value("${spring.redis.password}")
    private String password;
    //过期时间60分钟
//    private Duration timeToLive = Duration.ofMinutes(60);
//    private Duration timeToLive = Duration.ofMinutes(1);
    private Duration timeToLive = Duration.ofMillis(10000);
    

    /**
     * 创建连接工厂
     * @param redisSentinelConfiguration
     * @return
     */
    @Bean
    public JedisConnectionFactory jedisConnectionFactory(@Autowired RedisSentinelConfiguration redisSentinelConfiguration) {
        JedisConnectionFactory factory = new JedisConnectionFactory(redisSentinelConfiguration);
        factory.setHostName(host);
        factory.setPort(port);
        factory.setTimeout(timeout);
        factory.setPassword(password);
        factory.setDatabase(database);
        return factory;
    }

    /**
     * redis哨兵配置
     * @return
     */
    @Bean
    public RedisSentinelConfiguration redisSentinelConfiguration() {
        RedisSentinelConfiguration redisSentinelConfiguration = new RedisSentinelConfiguration();
        redisSentinelConfiguration.setMaster(master);
        String[] sens = Sentinels.split(",");
        for (int i = 0; i < sens.length; i++) {
            String[] str = sens[i].split(":");
            RedisNode redisServer = new RedisServer(str[0], Integer.parseInt(str[1]));
            redisSentinelConfiguration.sentinel(redisServer);
        }
        return redisSentinelConfiguration;
    }

    /**
     * jedisPool连接池统一通过redisUtil来获取连接
     *
     * @param jedisSentinelPool
     * @param jedisPoolConfig
     * @return
     */
    @Bean("jedisPool")
    public JedisPool jedisPool(@Autowired JedisSentinelPool jedisSentinelPool, @Autowired JedisPoolConfig jedisPoolConfig) {
        JedisPool jedisPool = new JedisPool(jedisPoolConfig, jedisSentinelPool.getCurrentHostMaster().getHost(), jedisSentinelPool.getCurrentHostMaster().getPort(), timeout, password);
        return jedisPool;
    }

    /**
     * 哨兵
     *
     * @param jedisPoolConfig
     * @return
     */
    @Bean
    public JedisSentinelPool jedisSentinelPool(@Autowired JedisPoolConfig jedisPoolConfig) {
        String[] strs = Sentinels.split(",");
        Set set = new HashSet();
        for (int i = 0; i < strs.length; i++) {
            set.add(strs[i]);
        }
        JedisSentinelPool jedisSentinelPool = new JedisSentinelPool(master, set, jedisPoolConfig, password);
        return jedisSentinelPool;
    }

    @Bean("jedisPoolConfig")
    public JedisPoolConfig getJedisPoolConfig() {
        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        //连接耗尽时是否阻塞, false报异常,true阻塞直到超时, 默认true
        jedisPoolConfig.setBlockWhenExhausted(true);
        //在空闲时检查有效性, 默认false
        jedisPoolConfig.setTestWhileIdle(true);
        //获取连接是检查有效性
        jedisPoolConfig.setTestOnBorrow(true);
        //最大连接数
        jedisPoolConfig.setMaxTotal(maxActive);
        //对象空闲多久后逐出, 当空闲时间>该值 且 空闲连接>最大空闲数 时直接逐出,不再根据MinEvictableIdleTimeMillis判断  (默认逐出策略)
        jedisPoolConfig.setSoftMinEvictableIdleTimeMillis(1800000);
        //最大空闲连接数, 默认8个
        jedisPoolConfig.setMaxIdle(maxIdle);
        jedisPoolConfig.setBlockWhenExhausted(true);
        //最小空闲连接数, 默认0
        jedisPoolConfig.setMinIdle(minIdle);
        //逐出连接的最小空闲时间 默认1800000毫秒(15分钟)
        jedisPoolConfig.setTimeBetweenEvictionRunsMillis(900000);
        //获取连接时的最大等待毫秒数(如果设置为阻塞时BlockWhenExhausted),如果超时就抛异常, 小于零:阻塞不确定的时间,  默认-1
        jedisPoolConfig.setMaxWaitMillis(maxWait);
        return jedisPoolConfig;
    }
    
    /**
     * 设置RedisCacheManager有效时间
     * @param connectionFactory
     * @return
     */
    /*@Bean
    RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
         默认配置， 默认超时时间为30s 
        RedisCacheConfiguration defaultCacheConfig = RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration
                .ofSeconds(30L)).disableCachingNullValues();
         配置access的超时时间为1小时
        Map<String, RedisCacheConfiguration> map = new HashMap<>();
        map.put("access", RedisCacheConfiguration.defaultCacheConfig().entryTtl(this.timeToLive).disableCachingNullValues());
        RedisCacheManager cacheManager = RedisCacheManager.builder(RedisCacheWriter.lockingRedisCacheWriter
                (connectionFactory)).cacheDefaults(defaultCacheConfig).withInitialCacheConfigurations(map).transactionAware().build();
        log.debug("自定义RedisCacheManager加载完成");
        System.out.println("自定义RedisCacheManager加载完成");
        return cacheManager;
    }*/
    /*@Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory factory) {
        RedisSerializer<String> redisSerializer = new StringRedisSerializer();
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);

        //解决查询缓存转换异常的问题
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(om);

        // 配置序列化（解决乱码的问题）
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                //  天缓存过期
                .entryTtl(this.timeToLive)
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(redisSerializer))
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer))
                .disableCachingNullValues();

        RedisCacheManager cacheManager = RedisCacheManager.builder(factory)
                .cacheDefaults(config)
                .build();
        return cacheManager;
    }*/
    /*@Bean
    public CacheManager cacheManager(RedisConnectionFactory factory) {


        RedisCacheConfiguration cacheConfiguration =
                RedisCacheConfiguration.defaultCacheConfig()
                        .entryTtl(Duration.ofMillis(10000))
                        .disableCachingNullValues()
                        .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new 
                        		GenericJackson2JsonRedisSerializer()));
        return RedisCacheManager.builder(factory).cacheDefaults(cacheConfiguration).build();
    }*/
    
    
    /**
     * 自定义redisTemplate
     * @param factory
     * @return
     */
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<String, Object> template = new RedisTemplate();
        template.setConnectionFactory(factory);
        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(om);
        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();
        // key采用String的序列化方式
        template.setKeySerializer(stringRedisSerializer);
        // value序列化方式采用String
        template.setValueSerializer(stringRedisSerializer);//jackson2JsonRedisSerializer
        // hash的key也采用String的序列化方式
        template.setHashKeySerializer(stringRedisSerializer);
        // hash的value序列化方式采用jackson
        template.setHashValueSerializer(jackson2JsonRedisSerializer);
        template.afterPropertiesSet();
        return template;
    }
    
    
    
}
