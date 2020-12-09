$(document).ready(function(){
    /* 1.:input
        可以选择<input>、<textarea>、<select>和<button>
    */
    var inputs = $(':input');
    console.log(inputs);
   /*  2.:text
        匹配所有的单行文本框,和input[type='text]一样
    */
   var texts =$(':text');
   console.log(texts);
   /* 3.其他input的type 
        :password / :radio / :checkbox / :image / :reset / :button / :file
   */
  
})