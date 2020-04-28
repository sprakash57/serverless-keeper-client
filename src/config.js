export default {
    s3: {
        REGION: "ap-south-1",
        BUCKET: "keeper-file-upload"
    },
    apiGateway: {
        REGION: "ap-south-1",
        URL: "https://qiaxhp6nq4.execute-api.ap-south-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "ap-south-1",
        USER_POOL_ID: "ap-south-1_sterWE2oW",
        APP_CLIENT_ID: "6neubicaac4p5p2is9hik5audb",
        IDENTITY_POOL_ID: "ap-south-1:f3eda46b-84d5-4aee-8834-02a25c677add"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
};