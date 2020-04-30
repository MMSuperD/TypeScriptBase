import {Article,articleModel} from "./model/article";
import {User,userModel} from "./model/user";

// 创建一个用户
var user = new User();
// 这个是添加数据
userModel.add(user);
// 删除数据
userModel.delete(1);
// 更新数据
userModel.update(user, 1);
// 得到数据
userModel.get(1);


// 创建一个文章对象
var article = new Article();
// 这个是添加数据
articleModel.add(article);
// 删除数据
articleModel.delete(1);
// 更新数据
articleModel.update(article, 1);
// 得到数据
articleModel.get(1);
