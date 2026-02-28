import demoApi from '../appInit/AxiosInterceptor';

export const getSentence = (): Promise<string> => {
    let resourceUrl = 'http://localhost:8080/api/rest/v1/orders/pending';
    return demoApi.get(resourceUrl).then((response) => response.data);
    }

export const getInsult = (): Promise<string> => {
    let resourceUrl = 'http://localhost:8080/api/rest/v1/orders/insult';
    return demoApi.get(resourceUrl).then((response) => response.data);
    }