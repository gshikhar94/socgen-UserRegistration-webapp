export class AppConfig {

    public static readonly HOST = '10.235.9.6'; 
    public static readonly PORT = '8080';

    public static readonly FETCH_USERS = 'http://' + AppConfig.HOST + ':' + AppConfig.PORT + '/fetchAllUsers' ;
    public static readonly CREATE_USER = 'http://' + AppConfig.HOST + ':' + AppConfig.PORT + '/createUser' ;
    public static readonly GET_USER_BY_NAME = 'http://' + AppConfig.HOST + ':' + AppConfig.PORT + '/getUserByName' ;
}