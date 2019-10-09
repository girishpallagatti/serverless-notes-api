import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure } from "./libs/response-lib";

export async function main(event, context){
    
    const params ={
        TableName: "notes_test",

        Key:{
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    console.log(params);
    try{
        const result = await dynamoDbLib.call("delete", params);
        return success({status: true});
    }catch(e){
        return failure({status:false});
    }
};