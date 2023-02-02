import * as aws from "@pulumi/aws";
import * as apigateway from "@pulumi/aws-apigateway";

// A Lambda function to invoke
const fn = new aws.lambda.CallbackFunction("fn", {
    callback: async (ev, ctx) => {
        return {
            statusCode: 200,
            body: new Date().toISOString(),
        };
    }
})

const authLambda = new aws.lambda.CallbackFunction("auth", {
    callback: async (event: any, context) => {
      // --- Add your own custom authorization logic here. ---
      const effect =
        event.headers?.Authorization === "goodToken" ? "Allow" : "Deny";
      return {
        principalId: "my-user",
        policyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Action: "execute-api:Invoke",
              Effect: effect,
              Resource: event.methodArn,
            },
          ],
        },
      };
    },
  });
  

// A REST API to route requests to HTML content and the Lambda function
const api = new apigateway.RestAPI("api", {
    routes: [
        { 
            path: "/route1", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route2", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route3", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route4", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route5", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route6", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route7", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route8", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route9", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        { 
            path: "/route10", 
            method: "GET", 
            eventHandler: fn,
            authorizers: [
                {
                  authType: "custom",
                  parameterName: "Authorization",
                  type: "request",
                  identitySource: ["method.request.header.Authorization"],
                  // Delegate to the Lambda function defined above
                  handler: authLambda,
                },
              ], 
        },
        // { 
        //     path: "/route11", 
        //     method: "GET", 
        //     eventHandler: fn,
        //     authorizers: [
        //         {
        //           authType: "custom",
        //           parameterName: "Authorization",
        //           type: "request",
        //           identitySource: ["method.request.header.Authorization"],
        //           // Delegate to the Lambda function defined above
        //           handler: authLambda,
        //         },
        //       ], 
        // },
    ]
});

// The URL at which the REST API will be served.
export const url = api.url;
