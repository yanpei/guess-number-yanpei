"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
//测试猜字游戏
describe("测试猜数字游戏", function(){
  //  sinon.spy(console, 'log');
  //测试changeToArr函数
    it("测试转换值", function(){
        var result = main.changeToArr(1234);
        var str_result='';
        for (var i=0;i<result.length;i++){
             str_result+=result[i]+'\n';
        }
        var expect_string = '1\n2\n3\n4\n';

        expect(expect_string).to.equal(str_result);
    });

//测试compareNumber函数
    it("测试数字一样，位置一样", function(){
        var result = main.compareNumber(1234,1234);
        var expect_string = '4A0B';
        expect(expect_string).to.equal(result);
    });

    it("测试数字一样、位置不一样", function(){
        var result = main.compareNumber(1234,4321);
        var expect_string = '0A4B';
        expect(expect_string).to.equal(result);
    });

    it("测试数字一样、位置部分一样", function(){
        var result = main.compareNumber(1234,1243);
        var expect_string = '2A2B';
        expect(expect_string).to.equal(result);
    });

    it("测试数字不一样、位置不一样", function(){
        var result = main.compareNumber(1234,5678);
        var expect_string = '0A0B';
        expect(expect_string).to.equal(result);
    });

    it("测试数字部分一样、位置部分一样", function(){
        var result = main.compareNumber(1234,1523);
        var expect_string = '1A2B';
        expect(expect_string).to.equal(result);
    });

  //测试answerGenerator函数
  　it("测试随机生成的是一个数",function(){
            var result = typeof(main.answerGenerator());
            var expect_string = 'number';
            expect(expect_string).to.equal(result);
      });
      it("测试随机生成的是一个四位数",function(){
                var result = main.answerGenerator()>=1000&&main.answerGenerator()<=9999;
                var expect_string = true;
                expect(expect_string).to.equal(result);
        });

      it("测试随机生成数每位都不重复",function(){
                var answer = main.answerGenerator();
                var answerArr = answer.toString().split("");
                var result = (answerArr[0]!=answerArr[1]&&answerArr[0]!=answerArr[2]&&answerArr[0]!=answerArr[3]&&answerArr[1]!=answerArr[2]&&answerArr[1]!=answerArr[3]&&answerArr[2]!=answerArr[3]);
                var expect_string = true;
                expect(expect_string).to.equal(result);
        });


//测试guess函数，mock 测试
        it("测试guess函数",function(){
               sinon.spy(console,"log");
               sinon.stub(main,"answerGenerator").returns(1234);
               sinon.stub(main,"compareNumber").returns("4A0B");
               main.guess(1234);
               expect(main.answerGenerator).to.have.been.calledWith();
               expect(main.compareNumber).to.have.been.calledWith(1234,1234);

               var result = _.flatten(console.log.args).join("\n");
               var expect_string = "4A0B";
               expect(expect_string).to.equal(result);
        });

});
