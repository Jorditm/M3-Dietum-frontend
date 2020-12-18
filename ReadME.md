# Dietum

## Description

es una plataforma en la que dietista y cliente esta conectado, a traces de Diet Manager podras ver la tabla de comidas que el dietista prepara y actualizaciones a tiempo real de la dieta

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

| Path                  | Component  | Permissions | Behavior                                                     |
| --------------------- | ---------- | ----------- | ------------------------------------------------------------ |
| `/signup`             | SignupPage | anon only   | Signup form, link to login, navigate to edit alumni profile after signup |
| `/login`              | LoginPage  | anon only   | Login form, link to signup, navigate to home directory after login |
| `/logout`             | n/a        | anon only   | Navigate to public homepage after logout, expire session     |
| `/`                   | HomePage   | User only   | Home page                                                    |
| `/EditDietitian`      |            | User only   |                                                              |
| `/PatientForm`        |            | User only   |                                                              |
| `/PatientProfile/:id` |            | User only   |                                                              |
| `/EditPatient/:id`    |            | User only   |                                                              |
| `/AllPatients`        |            | User only   |                                                              |
| ``/DietTable          |            | User only   |                                                              |

### Components

**Pages**

- AllPatients
- DietTable
- EditPatient
- EditDietitian
- Home
- Login
- PatientForm
- PatientProfile
- Private
- Signup

**Components**

- Navbar
- PatientList
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
// genre: { type: String, default: "", enum: ["Male", "Female"] },
password: { type: String, minlength: 6, required: true },
//tableDiet: { type: Array },
patients: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
tableFood: [{ type: Schema.Types.ObjectId, ref: "TableFood" }],
isDietitian: { type: Boolean, default: true },
messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
}
```

Patient Model

```javascript
{
  name: { type: String, required: true },
  weight: { type: String, required: true },
  energy: { type: Number, required: true },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number },

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

Food Model

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
  // password: { type: String, minlength: 6 },
  weight: { type: Number, default: "" },
  height: { type: Number, default: "" },
  age: { type: Number, default: "" },
  neckPerimeter: { type: Number, default: "" },
  hipPerimeter: { type: Number, default: "" },
  objectives: { type: String, default: "" },
  smoke: { type: String, default: "" },
  foodAllergies: { type: String, default: "" },

  //tableDiet: { type: Array },
  dietitian: { type: Schema.Types.ObjectId, ref: "Dietitian" },
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  imageUrl: {
    type: String,
    default: "",
  },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],

  desayuno: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  almuerzo: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  comida: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  merienda: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  cena: [{ type: Schema.Types.ObjectId, ref: "Food" }],
 
}
```

TableFood Model

```javascript
{
  desayuno: [{ type: String }],
  almuerzo: [{ type: String }],
  comida: [{ type: String }],
  merienda: [{ type: String }],
  cena: [{ type: String }],
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  client: [{ type: Schema.Types.ObjectId, ref: "Patient" }],
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

### Link
