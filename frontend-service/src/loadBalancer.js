const catalogReplicas = process.env.CATALOG_SERVICE_URLS.split(',');
const orderReplicas = process.env.ORDER_SERVICE_URLS.split(',');

let catalogIndex = 0;
let orderIndex = 0;

const getCatalogUrl = () => {
    const url = catalogReplicas[catalogIndex];
    catalogIndex = (catalogIndex + 1) % catalogReplicas.length;
    return url;
};

const getOrderUrl = () => {
    const url = orderReplicas[orderIndex];
    orderIndex = (orderIndex + 1) % orderReplicas.length;
    return url;
};

module.exports = { getCatalogUrl, getOrderUrl };
