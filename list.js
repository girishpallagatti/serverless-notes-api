import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure } from "./libs/response-lib";

export async function main(event, context){
    const params ={
        TableName: "notes_test",

       
            KeyConditionExpression: "userId = :userId",
            ExpressionAttributeValues: {
                ":userId": event.requestContext.identity.cognitoIdentityId
        }
    }
    console.log(params);
    try{
        const result = await dynamoDbLib.call("query", params);
        console.log(result);
            return success(result.Items);
    }catch(e){
        console.log(e);
        return failure({status:false});
    }
};