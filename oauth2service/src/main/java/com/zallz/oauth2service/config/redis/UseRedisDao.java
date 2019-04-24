package com.zallz.oauth2service.config.redis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;

import java.io.Serializable;
import java.time.Duration;
import java.util.Map;


/**
 * @Author: lyt
 * @description:整合redis的实例,简单了解RedisTemplate的API
 */
@Repository
public class UseRedisDao {

	@Resource
    private RedisTemplate<Object, Object> redisTemplate;
    private ValueOperations<Object, Object> valueOperations;
    private ListOperations<Object, Object> listOperations;
    private HashOperations hashOperations;
    @PostConstruct
    public void getValueOperation(){
        valueOperations = redisTemplate.opsForValue();
        listOperations = redisTemplate.opsForList();
        hashOperations = redisTemplate.opsForHash();
    }

    public void setValue(String key, String value){
        valueOperations.set(key, value);
    }
    
    public void setValueAndTime(String key, String value, Duration timeout){
        valueOperations.set(key, value, timeout);
    }

    public String getValue(String key){
        return (String) valueOperations.get(key);
    }

    public void addList(String key, String value){
        listOperations.leftPush(key, value);
    }
    public Long getListSize(String key){
        return listOperations.size(key);
    }

    public void setHashMap(String key, Map map){
        hashOperations.putAll(key, map);
    }
    public Map getHashMap(String key){
        return hashOperations.entries(key);
    }
}
