NumberProgressBar
=================

> A lovely progressbar. Inspired by [daimajia](https://github.com/daimajia/NumberProgressBar).

![demo](http://imageshack.com/a/img838/9281/urq.gif)


### Installation

```
bower install NumberProgressBar [--save]
```

### Usage

##### HTML
```HTML
<div class="number-pb">
  <div class="number-pb-shown"></div>
  <div class="number-pb-num">0%</div>
</div>
```

##### CSS
You can refer to the file `number-pb.css` and make your own modifications.

```CSS
.number-pb {
  position: relative;
  height: 3px;
  background-color: #ddd;
}

.number-pb .number-pb-shown {
  position: absolute;
  background-color: #176785;
  background-image: linear-gradient(to right, #176785, #499989);
  top: -1px;
  left: 0;
  height: 5px;
  -moz-box-shadow:    0 0 3px 0 #499989;
  -webkit-box-shadow: 0 0 3px 0 #499989;
  box-shadow:         0 0 3px 0 #499989;
}

.number-pb .number-pb-num {
  position: absolute;
  background-color: #fff;
  left: 0;
  top: -0.45em;
  padding: 0 5px; 
}
```

##### javaScript

```javascript
var bars = $('.number-pb').NumberProgressBar(options);
bars.reach(num);  //num is the percentage at which you want to reach
```

### Options

| Option        | Default              | Usage                                     |
| ------------- | -------------------- | ----------------------------------------- |
| duration      | `10000`              | The duration (in ms) needed from 0 to 100 |
| percentage    | `0`                  | The initial percentage                    |
| shownQuery    | `'.number-pb-shown'` | Your query string for the shown bar       |
| numQuery      | `'.number-pb-num'`   | Your query string for the number          |
