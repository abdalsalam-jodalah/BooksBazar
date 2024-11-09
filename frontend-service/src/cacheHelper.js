let cache = {};
const getCache = (key) => {
    return cache[key];
};

const setCache = (key, value) => {
    cache[key] = { data: value, timestamp: Date.now() };
};

const invalidateCache = (key) => {
    delete cache[key];
};

const clearCache = () => {
    cache = {};
};

module.exports = { getCache, setCache, invalidateCache, clearCache };
