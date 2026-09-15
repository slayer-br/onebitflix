import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode"

Category.hasMany(Course);
Course.belongsTo(Category);
Episode.belongsTo(Course)
export { 
  Category, 
  Course,
  Episode 
};
