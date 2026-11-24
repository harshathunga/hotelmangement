import users from "./Usersmodels.js";
import companies from "./Companymodels.js";


users.belongsTo(companies, { foreignKey: "companyid",  });
companies.hasMany(users, { foreignKey: "companyid" });


export { users, companies };