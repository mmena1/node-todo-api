const request = require("supertest");
var { expect } = require("chai");

const { app } = require("./../server");
const { Todo } = require("./../models/todo");

beforeEach(done => {
  Todo.remove({}).then(() => done());
});

describe("POST /todos", function() {
  it("should create a new todo", function(done) {
    // this.timeout(5000);
    var text = "Test todo text";
    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).to.equal(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then(todos => {
            expect(todos.length).to.deep.equal(1);
            expect(todos[0].text).to.equal(text);
            done();
          })
          .catch(e => done(e));
      });
  });

  it("should not create todo with invalid data", function(done) {
    request(app)
      .post("/todos")
      .send({ })
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then(todos => {
            expect(todos.length).to.deep.equal(0);
            done();
          })
          .catch(e => done(e));
      });
  });
});
