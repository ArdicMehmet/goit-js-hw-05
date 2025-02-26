function getTotalBalanceByGender(users, gender){
    let totalBalance = 0;
    users.forEach( user => user.gender.toLowerCase() === gender.toLowerCase() ? totalBalance+=user.balance : totalBalance);
    return totalBalance;
}
console.log("----------------------- Gorev 4 -----------------------");
const allUsersForTask4 = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log("male's total balance : " + getTotalBalanceByGender(allUsersForTask4, "male")); // 12053

console.log("female's total balance : " + getTotalBalanceByGender(allUsersForTask4, "female")); // 8863
