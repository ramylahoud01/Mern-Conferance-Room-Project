# Mern-Conferance-Room-Project
Welcome ! 
This repository contains a  MERN Conferance Room Project . 
In this README, we have included some pictures to provide visual examples  in action. 
Please take a look at the images below to get a better understanding.

# Home :
![Screenshot 2023-07-02 191738](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/82eb830e-a95f-46f6-a2f0-1e0e87abdef8)
![Screenshot 2023-07-02 192014](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/4075033a-810d-4b93-aa88-be3a4eba7180)

# Drawer :
This drawer grants access to various interview-related actions, including viewing, creating, updating, deleting, and clearing all interviews.
![Screenshot 2023-07-02 192152](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/cbc24999-0e16-4050-aa9e-39ea3dd5e0bc)

# View Interviews :
When you click on "View Interviews," a table will appear showing all the available interviews for your reference and review.

![Screenshot 2023-07-02 192917](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/9298fbc2-16ab-474a-9f61-50a0fefaf7d3)

You can delete or view an interview by utilizing the respective buttons.
![picutre5](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/31f872c7-74e9-4c4a-9bbb-db1e3582be29)


If you click on the "View" button, you will be able to see all the fields of the specific interview above the table.
![Screenshot 2023-07-02 193546](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/28f2805f-f70e-4a57-bb33-3cd4d8cfa144)

# New Interview :

Once you click on "New Interview", a pop-up dialog will appear.
![Screenshot 2023-07-02 193840](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/5d5e4b7e-fe03-4da5-aeb9-cf93488a0f8f)

After filling out all the required fields in the form, the new interview will be successfully added.
![Screenshot 2023-07-02 194323](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/163e1488-5046-4c4a-bcac-6c93fb49b317)

Upon successful addition of the interview, you can see that it has been added at the top of the list since it has the lowest date.
![pic4](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/f26002c9-5048-4661-b540-48d21e514b7e)

After successfully adding the interview, you will see the total number of interviews updated, along with the remaining time for the interview.
![pic6](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/fa0ac081-08d2-4eaa-a367-ee28c303f344)
If you try to submit an empty form, an error message will appear to notify you that the form cannot be submitted without filling in the required fields.
![Screenshot 2023-07-02 195120](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/c36854e3-b489-49c4-a7a3-f4bac53e180a)


# Delete Interview :
Once you click on "Delete Interview", a pop-up dialog will appear.
![Screenshot 2023-07-02 195311](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/f76a76d1-eed7-45a4-9597-3fe9ec91cefc)

To delete an interview, simply enter the interview ID and click on the "Delete" button.


# View Interview :
Once you click on "View Interview," the "View Interview" button is replaced by an input field where you can enter the ID of the interview you wish to view.
![Screenshot 2023-07-02 201215](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/a3cb80e3-9bc6-4775-97c7-98c373a02249)


To View an interview, simply enter the interview ID and click on the "View" button.
Once you clicked, a pop-up dialog will appear.
![Screenshot 2023-07-02 201420](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/2212dd1e-3da0-404d-ab52-d94497e33e63)



# Update Interview :
Once you click on "Update Interview," the "Update Interview" button is replaced by an input field where you can enter the ID of the interview you wish to Update.
![Screenshot 2023-07-02 201611](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/38e323eb-06d2-4b18-b8cf-8236aae61300)

To Update an interview, simply enter the interview ID and click on the "Update" button.
Once you click, a pop-up dialog will appear, displaying the existing fields of the interview you want to update.

![Screenshot 2023-07-02 201749](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/3db0dd37-30ce-46fe-bba7-788a79c39d72)

# Clear All Interview :
Once you click on "Clear All Interviews," a pop-up dialog will appear, prompting you to confirm if you are sure you want to delete all interviews.

![Screenshot 2023-07-02 202125](https://github.com/ramylahoud01/Mern-Conferance-Room-Project/assets/116891890/41eac378-60ce-42c5-bdb2-e4e5e558728b)


## Troubleshooting
### Installation Issues

If you encounter issues during the installation process, such as slow package resolution or timeouts, it is recommended to use Yarn instead of npm. Yarn often provides better performance and reliability when dealing with large dependency trees.

To install the project dependencies using Yarn, run the following command:

npm config set proxy null,
npm config set https-proxy null,
npm config set registry https://registry.yarnpkg.com/,
npm install -g yarn,
Once Yarn is installed, navigate to your project directory and run yarn install instead of npm install

