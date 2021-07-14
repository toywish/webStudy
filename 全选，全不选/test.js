"use strict";

var form = $("#test-form"),
  langs = form.find("[name=lang]"),
  selectAll = form.find("label.selectAll :checkbox"),
  selectAllLabel = form.find("label.selectAll span.selectAll"),
  deselectAllLabel = form.find("label.selectAll span.deselectAll"),
  invertSelect = form.find("a.invertSelect");

// 重置初始化状态:
form.find("*").show().off();
form.find(":checkbox").prop("checked", false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
  e.preventDefault();
  alert(form.serialize());
});
selectAll.click(function () {
  langs.prop("checked", this.checked); //全选
  checkAll(); //检测是否全选
});
langs.click(function () {
  checkAll(); //检测是否全选
});
invertSelect.click(function () {
  langs.prop("checked", (x, y) => {
    return !y;
  }); //反选实现
  checkAll(); //检测是否全选
});

function checkAll() {
  if (langs.filter(":checked").length == 5) {
    //判断选择了多少个
    deselectAllLabel.show(); //显示全不选
    selectAllLabel.prev().prop("checked", true); //全选打钩
    selectAllLabel.hide(); //隐藏全选
  } else {
    deselectAllLabel.hide();
    selectAllLabel.prev().prop("checked", false);
    selectAllLabel.show();
  }
}

selectAll.click(function () {
  langs.prop("checked", this.checked); //全选
  checkAll(); //检测是否全选
});
langs.click(function () {
  checkAll(); //检测是否全选
});
invertSelect.click(function () {
  langs.prop("checked", (x, y) => {
    return !y;
  }); //反选实现
  checkAll(); //检测是否全选
});

function checkAll() {
  if (langs.filter(":checked").length == 5) {
    //判断选择了多少个
    deselectAllLabel.show(); //显示全不选
    selectAllLabel.prev().prop("checked", true); //全选打钩
    selectAllLabel.hide(); //隐藏全选
  } else {
    deselectAllLabel.hide();
    selectAllLabel.prev().prop("checked", false);
    selectAllLabel.show();
  }
}
