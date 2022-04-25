# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer:

We just learned about Ruby hashes this week. I remember a Ruby hash as kind of like an array but instead of us indexing for our desirted output we just call back the unique key. 

For example a hash can look something like: 

breakfest = {eggs: "2 pounds", bacon: "3 pounds"}

then it will return your hash when you access soemthing inside the variable breakfest

for example: breakfest[:eggs] #=> 2 pounds

You can also create a hash using the .new method. Hashes can be updated and/or deleted. This subject is when were discussed the CRUD workflow (create, delete, update and destroy) pertaining to hashes.Hashes was one of my favortie subjects to learn about this week because It seemed pretty straightforward to me. 

  Researched answer:

Upon research, A Ruby hash is a collection of unqiue keys and thier values. A hash is also like an array that  can be accessed with calling a unique key value instead of the indexes like you would in an array. A hash is an enumerable (type of moduels that include items that are able to iterate like hashes,ranges and arrays) so you can add methoods like .map or .each to go through the hash as well. Hashes store large amounts of data.

2. What is a gem?

  Your answer:

When I think of a Ruby Gem I think of the package manager where you can easily share ruby code with other people. We were itroudced to Ruby Gem as we used it to install the Ruby testing framework of RSPEC. I remmeber GEMs almost like hopw we access the libary of ruby code already written as an extension. Like how e used it for Rspec purposes and were able to access the spec file. I look forward to using GEMs in a building a website becuase we can add extension to have people pay for services and even u-pload photos depending ont he gem we use. I know this becuase I read about it when I was looking at GEM info that day we spoke of GEMS. 


  Researched answer:
A GEM is packaged mnanager of library or snippet code of functionality. So GEMS package up the code so we can easily share it with others. There are so many GEMS out there for almost any function. There is actually a GEM libary already created which makes using Ruby perferred. You can go to rubygems.org and access a large libary of gems already created to make building your app to your desire.


3. What is Ruby on Rails?

  Your answer:

We were introduced to Ruby on Rails this week. Ruby on Rails is used by major ccompanies such as Shopify and Github! We recently dablbed with active record on rails and it is not that bad so far so I am excited to learn more Rails soon. Ruby on Rails is a user friendly framework written in the Ruby language. Rails is made up of the MVC pattern. The M I believe stands for Model which is how the database is built, The V for View is what the user sees, and the C for controller is how the data from the model to the view is sent.

Ruby on rails has a very unqiue set up because you have to be on the app and the file. So when you set up Ruby on Rails you are basically dowloading the entire libary which is convenient but it is definetley a new process acessing the server host and creating the database.


  Researched answer:

Ruby on Rails is an open source, server side web app framework used to build web applications. Rails adds extran functionality to Ruby as it is houses a libary of code in Ruby. Ruby on Rails is ranked highly amongst developers because of its simplicity. Ruby on Rails is simple and does not require extensive code. Rails operates on the MVC model. The MVC model is unique because it provides a deafult structure for a desired database when we are building our web apps.


4. What is a relational database? Are there other kinds of databases?

  Your answer:

  Relational databases store data in tables and columns for easy accessiblity. I enjoyed working with relational databases this week when we got a chance to work with SQL. I have to say that us learning about SQL was my favorite part of the week. It is worth mentioning,that excel worksheet databases can be techincally classified as relational databases. Relational databases are important because as developers we deal with data and we need to know how to access data easily and accuratley for efficency. I know working with SQL we were able to access multiple data types and we could ensure we had the corect data by excluding NULL and other data types we did not need. By using keyword we were able to manuever in the database organized by columns and thier respective tables.

  Other kinds of relational databases: Excel, SQL and Oracle from the top of my head just by working in Oracle in the past I know that it might be classified as a relational database.

  Researched answer:

A relational database is a collection of data organized by rows and columns and stored in set of tables in accordance with thier corresponding objects. Information on realtional databses can be accesed through quieries. Exmaples of relational databases include: SQL, ORACLE, AWS, EXCEL and GOOGLE SHEETS, IBM DB2 and more.


5. What are primary keys? Why are they important?

  Your answer:

We learned about primary keys this week. Immediatley when I think of primary keys I think of an ID which is a unqiue idenitfier for a row of data that is created. A primary key contains a unique value for each column of data which makes it pretty cool to ensure you dont get data confused as each instance has its own identifier. I know that working on challenges this week knowing what primary keys are and being able to identify them really helped me in a situation where I thought I had duplicate data types. It turned out they were just similiar data that I was able to tell apart due to the primary key identifiers.


  Researched answer:

A primary key is how a row uniquely identifies itself to other parts of the program. You can identify a corresponding ID by searching the ID instance in the data and the number that follows. Primary keys are used to organize and group together data to make it easily accesible and uniquely identifiable.

## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: Followed by the for interaction routes between the client and the server for Rails. Restful rutes stands for Represenational State Transfer. They are meant to bring the operations that can be applied to an oject located int he HTTP requests we make. These rotues are important in CRUD operations.

2. JSON:Rails has the ability to convert objects to JSON (Javascrip[t data) and can send the data back to the broswer by rendering JSON. When we render JSON on Rails, we ask the broswer to send objects as the response. 

3. ERB: is a ruby extension that stands for embdeed ruby that is a file structure that allows us to code HTML and put Ruby code in the view file. ERB extensions contain code written in a programming language of the same text and its features are in HTML code. 

4. Params: Pararms allow us to to add more information to our program by passing value in to the controller. Params are used to accces by the controller part of the MVC on rails. Params are used to pass URLs. I am excited to learn more about Params. 

5. API: API stands for an Application Programming Interface that make sense of the interactions between multiple software external systems. An API is better known as a messenger that takes requests and tells a system what you want to do and then returns the response back to you on a continous basis. API is how we are kept on constant concetivity. 
