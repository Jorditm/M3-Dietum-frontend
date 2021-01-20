# Dietum

## Description

A platform where a dietitian can manage all the information of their patients, as many diets as measures and can add foods with all their information, schedule events and a history of information

## User Stories

**ANON**

- **Signup:** As an anon I can sign up in the platform so that I can start manage the dietitian's users
- **Login:** As a user I can login to the platform so that I can manage the dietitian's users
- **Logout:** As a user I can logout from the platform so no one else can use it

**USER**

- **Home page**
- **Edit Dietitian**
- **Add Patients** As a dietitian, I can add users and then manage the information
- **Patient profile** As a dietitian, I can see, the profile's user, and see other user profiles
- **Edit patients** As a dietitian, I can edit all patient's profiles
- **Delete patients** As a dietitam, I can delete patient's profiles
- **Patient List**  As a dietitian, I can see all users
- **Diet table** a table where to add and remove food
- **Menage food** I can add and delete food, weight and energy (kcal) in the diet list

## MVP & Backlog

## Client/Frontend

### Routes

| Path                              | Component      | Permissions | Behavior                                                     |
| --------------------------------- | -------------- | ----------- | ------------------------------------------------------------ |
| `/signup`                         | SignupPage     | anon only   | Signup form, link to login, navigate to edit alumni profile after signup |
| `/login`                          | LoginPage      | anon only   | Login form, link to signup, navigate to home directory after login |
| `/logout`                         | n/a            | anon only   | Navigate to public homepage after logout, expire session     |
| `/`                               | HomePage       | User only   | Home page                                                    |
| `/EditDietitian`                  | EditDietitian  | User only   | Page to edit Dietitian data                                  |
| `/PatientForm`                    | PatientForm    | User only   | Page to create a new patients                                |
| `/PatientProfile/:id`             | PatientProfile | User only   | Page to view patient information                             |
| `/EditPatient/:id`                | EditPatient    | User only   | Page to edit Patient data                                    |
| `/AllPatients`                    | AllPatients    | User only   | Page to view a list of all patients of a dietitian           |
| `/:id/dietTable`                  | DietTable      | User only   | Page to view a diet table of a patient and add foods to any menu |
| `/:id/dietTable/:tableMenu/foods` | FoodForDiet    | User only   | A list with all foods to select and add to the table         |
| `/foodProfile/:id`                | FoodProfile    | User only   | Page to view food information                                |
| `/foodTable`                      | FoodTable      | User only   | A list with all foods to select and view the foodProfile page |

### Components

**Pages**

- AllPatients
- DietTable
- EditPatient
- EditDietitian
- FoodForDiet
- FoodProfile
- FoodTable
- Home
- Login
- PatientForm
- PatientProfile
- Private
- Signup

**Components**

- Navbar
- PatientList
- FoodList
- Sidebar

### Services

- Auth Services
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Dietitian
  - getInfoPatients
  - createPatients
  - addPatient
  - patientProfile
  - deletePatient
  - editDietitian
  - editInfoPatient
- Food
  - allFoods
  - getFoodDetails
  - searchFood
  - addFoodToTable

## Server/Backend

### Models

Dietitian Model

```javascript
{
name: { type: String },
lastName: { type: String, default: "" },
proName: { type: String, default: "" },
email: {
  type: String,
  match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  required: true,
  unique: true,
  },
password: { type: String, minlength: 6, required: true },
patients: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
isDietitian: { type: Boolean, default: true },
messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
}
```

Food Model

```javascript
{
  FoodGroup: { type: String, default: "" },
  Description: { type: String, default: "" },
  CommonName: { type: String, default: "" },
  MfgName: { type: String, default: "" },
  ScientificName: { type: String, default: "" },
  Energy_kcal: { type: String, default: "" },
  Protein_g: { type: String, default: "" },
  Fat_g: { type: String, default: "" },
  Carb_g: { type: String, default: "" },
  Sugar_g: { type: String, default: "" },
  Fiber_g: { type: String, default: "" },
  VitA_mcg: { type: String, default: "" },
  VitB6_mg: { type: String, default: "" },
  VitB12_mcg: { type: String, default: "" },
  VitC_mg: { type: String, default: "" },
  VitE_mg: { type: String, default: "" },
  Folate_mcg: { type: String, default: "" },
  Niacin_mg: { type: String, default: "" },
  Riboflavin_mg: { type: String, default: "" },
  Thiamin_mg: { type: String, default: "" },
  Calcium_mg: { type: String, default: "" },
  Copper_mcg: { type: String, default: "" },
  Iron_mg: { type: String, default: "" },
  Magnesium_mg: { type: String, default: "" },
  Manganese_mg: { type: String, default: "" },
  Phosphorus_mg: { type: String, default: "" },
  Selenium_mcg: { type: String, default: "" },
  Zinc_mg: { type: String, default: "" },
}
```

Patient Model

```javascript
{
  name: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    unique: true,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  weight: { type: Number, default: "" },
  height: { type: Number, default: "" },
  age: { type: Number, default: "" },
  neckPerimeter: { type: Number, default: "" },
  hipPerimeter: { type: Number, default: "" },
  objectives: { type: String, default: "" },
  smoke: { type: String, default: "" },
  foodAllergies: { type: String, default: "" },

  imageUrl: { type: String, default: "" },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
	diet: [
    	{
     	 desayuno: { type: Schema.Types.ObjectId, ref: "Food" },
     	 almuerzo: [{ type: Schema.Types.ObjectId, ref: "Food" }],
     	 comida: [{ type: Schema.Types.ObjectId, ref: "Food" }],
     	 merienda: [{ type: Schema.Types.ObjectId, ref: "Food" }],
     	 cena: [{ type: Schema.Types.ObjectId, ref: "Food" }],
   	 },
  	],
}
```

Messages Model

```javascript
{
  text: { type: String, required: true },
  date: { type: String, required: true },
  dietitian: { type: Schema.Types.ObjectId, ref: "Dietitian" },
  patient: { type: Schema.Types.ObjectId, ref: "Patient" },
}
```



### API Endpoints (Backend routes)

| HTTP Method | URL                      | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | ------------------------ | :----------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`               |                                                              | 2009           | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`           |                                                              | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`            | {username, password}                                         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`           | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| GET         | `/dietitian/allPatients` |                                                              | 200            | 500          | Get all the information from your patients by ID             |
| POST        | `/dietitian/createUser`  | {name, lastName, email, gender, age, weight, height, hipPerimeter, neckPerimeter, objectives, foodAllergies, smoke} | 200            | 500          | Create a new Patient with all the information                |
| POST        | `/dietitian//add/:id`    |                                                              | 200            |              | Adds the patient to the ID of the dietitian who created him  |
| GET         | `/dietitian/profile/:id` |                                                              | 200            | 500          | We obtain all the information from the patient that we have created before |
| POST        | `/dietitian/delete/:id`  | {id}                                                         | 200            |              | We can delete a patient from DB                              |
| PUT         | `/editPatient/:id`       | {id}                                                         | 200            |              | We can edit all patient profile                              |
| PUT         | `/editDietitian/:id`     | {id}                                                         | 200            |              | We can edit info about dietitian                             |
| GET         | `/allFoods`              |                                                              | 200            | 500          | We obtain all the information from food JSON                 |
| POST        | `/searchFood`            | {Descripción}                                                | 200            | 500          | Searchbar to find a foods by name                            |
| POST        | `/createFood`            | {Descrip, CommonName, Energy_kcal, Protein_g, Fat_g,  Carb_g, Sugar_g,} | 200            | 500          | We can create a food with all information                    |
| POST        | `/addFood`               |                                                              | 200            | 500          | To create a diet, we can add the food in the diet's patient  |
| GET         | `/getFood/:id`           | {id}                                                         | 200            | 500          | View all info about food by id                               |

### Link

[Old Deploy](https://dietum-m3.herokuapp.com/)