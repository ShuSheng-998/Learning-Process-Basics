$(document).ready(function(){
    /*  1.找到含有属性type的标签 */
    var all = $('[type]');

    /*  2.找到class属性为tool的标签 */
    var attribute_2 = $('[class = tool]');

    /*  3.找到class属性不为tool的标签 */
    var attribute_3 = $('[class != tool]');

    /*  4.找到class属性中以tool字符串开头的标签 */    
    var attribute_4 = $('[class ^= tool]');

    /*  5.找到class属性中以vs字符串结尾的标签 */   
    var attribute_5 = $('[class $= vs]');

    /*  6.找到class属性中包含字符串vs的标签 */
    var attribute_6 = $('[class *= vs]');
    
    /*  6.找到属性中包含type和src属性的标签 */
    var attribute_7 = $('[type][src]');

    //找到class属性中含有lang并以y结尾的标签
    var attribute_test = $('[class*=lang] [class$=y]');
    console.log(attribute_test);
  })