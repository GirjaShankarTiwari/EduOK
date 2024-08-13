import {View, Text} from 'react-native';
import React from 'react';
import Color from '../Constants/Color';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SchoolProfile from '../AdminPanel/screens/EduokERP_Modules/SchoolProfile/SchoolProfile';
import RegistrationSuccess from '../AdminPanel/screens/EduokERP_Modules/StudentManagement/RegistrationSuccess';
import ClassSettings from '../AdminPanel/screens/ClerkModules/Settings/ClassSettings/ClassSettings';
import Settings from '../AdminPanel/screens/ClerkModules/Settings/Settings';
import {
  ReportAndPrintable,
  BaseScreen,
  Splash,
  Login,
  Profile,
  Signup,
  StudentManagement,
  AdmissionDashboard,
  AddNewStudent,
  PrintableSampleViewer,
  EditClass,
  AddSection,
  AddNewClass,
  FeeSettings,
  FeeMasterList,
  ClassFee,
  AddClassFee,
  AllSiblings,
  SubjectSettings,
  FeeReceiptSettings,
  DepartmentSettings,
  RollNumberManagement,
  SessionSettings,
  AddUpcomingSession,
  BoardMediumSettings,
} from '../AdminPanel/screens';
import HelpDesk from '../AdminPanel/screens/ClerkModules/HelpDesk/HelpDesk';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          headerShown: true,
          title: 'School Registration',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="schoolProfile"
        component={SchoolProfile}
        options={{
          headerShown: false,
          title: 'School Profile',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="addNewClass"
        component={AddNewClass}
        options={{
          headerShown: true,
          title: 'Add New Class',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="addClassFee"
        component={AddClassFee}
        options={{
          headerShown: true,
          title: 'Add Class Fee',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="allSiblings"
        component={AllSiblings}
        options={{
          headerShown: true,
          title: 'All Siblings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="feeSettings"
        component={FeeSettings}
        options={{
          headerShown: true,
          title: 'Fee Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="feeMasterList"
        component={FeeMasterList}
        options={{
          headerShown: true,
          title: 'Fee Master List',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="classFee"
        component={ClassFee}
        options={{
          headerShown: true,
          title: 'Class Fee',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{
          headerShown: true,
          title: 'Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="classSettings"
        component={ClassSettings}
        options={{
          headerShown: true,
          title: 'Class Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="addSection"
        component={AddSection}
        options={{
          headerShown: true,
          title: 'Add New Section',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="editClass"
        component={EditClass}
        options={{
          headerShown: true,
          title: 'Edit Class',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="registrationSuccess"
        component={RegistrationSuccess}
        options={{
          headerShown: true,
          title: 'Registration Success',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="baseScreen"
        component={BaseScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen
        name="printableSampleViewer"
        component={PrintableSampleViewer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="studentManagement"
        component={StudentManagement}
        options={{
          headerShown: true,
          title: 'Student Management',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="reportAndPrintable"
        component={ReportAndPrintable}
        options={{
          headerShown: true,
          title: 'Report And Print',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.orange1},
        }}
      />
      <Stack.Screen
        name="admissionDashboard"
        component={AdmissionDashboard}
        options={{
          headerShown: true,
          title: 'Admission Dashboard',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="addNewStudent"
        component={AddNewStudent}
        options={{
          headerShown: true,
          title: 'Student Registration',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="subjectSettings"
        component={SubjectSettings}
        options={{
          headerShown: true,
          title: 'Subject Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="feeReceiptSettings"
        component={FeeReceiptSettings}
        options={{
          headerShown: true,
          title: 'Fee Receipt Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="departmentSettings"
        component={DepartmentSettings}
        options={{
          headerShown: true,
          title: 'Department Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="rollNumberManagement"
        component={RollNumberManagement}
        options={{
          headerShown: true,
          title: 'Roll Number Management',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="sessionSettings"
        component={SessionSettings}
        options={{
          headerShown: true,
          title: 'Session Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="addUpcomingSession"
        component={AddUpcomingSession}
        options={{
          headerShown: true,
          title: 'Add Upcoming Session',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="boardMediumSettings"
        component={BoardMediumSettings}
        options={{
          headerShown: true,
          title: 'Board Medium Settings',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
      <Stack.Screen
        name="helpDesk"
        component={HelpDesk}
        options={{
          headerShown: true,
          title: 'Help Desk',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
