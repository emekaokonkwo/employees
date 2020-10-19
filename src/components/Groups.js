import React from "react";
import GroupItem from "./GroupItem";

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
};

const Groups = ({ names }) => {
  //To randomize array
  const randomArr = (array) => {
    let num = Math.floor(Math.random() * array.length);
    let name = array.splice(num, 1);
    array.push(name);

    return array;
  };

  const arr = randomArr(names);

  const orderedLists = chunk(arr, 5);

  return orderedLists.map((lists, index) => {
    return <GroupItem lists={lists} index={index} key={lists} />;
  });
};

export default Groups;
