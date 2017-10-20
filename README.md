# THIS REPO IS DEPRECATED

Please Move To https://github.com/vuematerial/vue-material


<p align="center"><a href="http://elviskang.github.io/vue-material" target="_blank"><img width="150"src="https://raw.githubusercontent.com/ElvisKang/vue-material/gh-pages/static/images/materialize-150x75.png"></a></p>

# Introduction

Vue-material intends to build [Materialize(0.97.2+)](http://materializecss.com/) with pure [Vue.js(1.0.0+)](http://vuejs.org/) ,which let users get rid of depending on 3rd Javascript libraries ,such as Materialize.js and Jquery.js(with plugins).In addition,I hope that you will construct a material design website easier with vue-material.

# Status

Still Under Building

# Supported Browsers:

Chrome 35+, Firefox 31+, Safari 7+, IE 10+

# Documentation

[Link](http://elviskang.github.io/vue-material/)

# Declaration & Acknowledgement

This project **doesn't** belong to Materialize. I'd like to thank Alan Chang for permitting me to use their Logo for this project. :)

# Getting Started

## Download

Download [Materializecss](http://materializecss.com/getting-started.html) and [Vue.js(1.0.0+)](http://vuejs.org/)

```bash
npm install vue-material
```

## Usage

```javascript
import Vue from 'vue';
import Material from 'vue-material';
//Globally register all of the components;
Material.regAll(Vue);
//or
//Globally register the components that you need
Material.reg(Vue,['buttons','cards']);
```
