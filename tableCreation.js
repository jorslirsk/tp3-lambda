// 1. Creacion de tabla
let tableParams = {
    TableName: 'Envio',
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S',
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    }
};


// 2. Creacion de indices

let indexParams = {
    TableName: 'Envio',
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S'
        },
        {
            AttributeName: 'pendiente',
            AttributeType: 'S'
        }],
    GlobalSecondaryIndexUpdates: [{
        Create: {
            IndexName: 'EnviosPendientesIndex',
            KeySchema: [
                {
                    'AttributeName': 'id',
                    'KeyType': 'HASH'
                },
                {
                    'AttributeName': 'pendiente',
                    'KeyType': 'RANGE'
                }
            ],
            Projection: {
                ProjectionType: 'INCLUDE',
                NonKeyAttributes: ['pendiente']
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1,
            },
        },
    },
    ],
};


dynamodb.createTable(tableParams, function (err, data) {
    if (err) ppJson(err);
    else {
        dynamodb.updateTable(indexParams, function (err, data) {
            if (err) ppJson(err);
            else console.log("Tablas e indices creados correctamente")
        }
        );
    }
}
);