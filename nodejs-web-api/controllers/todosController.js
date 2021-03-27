import { createDynamodbClient } from "../database/dynomoDb.js";

export const getTodos = (req, res) => {
  createDynamodbClient()
    .scan({ TableName: "Todos" })
    .promise()
    .then((result) => {
      res.send(result.Items.sort((a, b) => a.id - b.id));
    })
    .catch((err) => {
      res.send(createResponseObj(err.statusCode, err));
    });
};

function createResponseObj(pCode, message) {
  return { statusCode: pCode, body: JSON.stringify(message) };
}
export const createTodo = (req, res) => {
  const newTodo = req.body;
  let params = {
    TableName: "Todos",
    Item: newTodo,
  };

  createDynamodbClient()
    .put(params)
    .promise()
    .then(() => {
      res.send(newTodo);
    })
    .catch((err) => {
      res.send(createResponseObj(err.statusCode, err));
    });
};

export const getTodo = (req, res) => {
  const { id } = req.params;
  var todo_id = Number(id); // convert id to NUMBER to use dynamoDb becuse of Todos primary key is number.
  var params = {
    TableName: "Todos",
    Key: { id: todo_id },
  };
  createDynamodbClient()
    .get(params)
    .promise()
    .then((result) => {
      if (result.Item) res.send(result.Item);
      else res.send(createResponseObj(404, "no  data found"));
    })
    .catch((err) => {
      res.send(createResponseObj(err.statusCode, err));
    });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  var todo_id = Number(id); // convert id to NUMBER to use dynamoDb becuse of Todos primary key is number.

  var params = {
    TableName: "Todos",
    Key: {
      id: todo_id,
    },
  };

  createDynamodbClient()
    .delete(params)
    .promise()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(createResponseObj(err.statusCode, err));
    });
};

export const patchTodo = (req, res) => {
  const { id } = req.params;
  var todo_id = Number(id); //TODO: Data type important
  const { title, desc, status } = req.body;

  var params = {
    TableName: "Todos",
    Key: {
      id: todo_id,
    },
    UpdateExpression: " set title =:title, #desc=:desc, #status=:status ",
    ExpressionAttributeNames: {
      //desc and status is key word in dynamoDb , so we used this mapping. notice to use #
      "#desc": "desc",
      "#status": "status",
    },
    ExpressionAttributeValues: {
      ":title": title,
      ":desc": desc,
      ":status": status,
    },
    ReturnValues: "UPDATED_NEW",
  };

  createDynamodbClient()
    .update(params)
    .promise()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(createResponseObj(err.statusCode, err));
    });
};
