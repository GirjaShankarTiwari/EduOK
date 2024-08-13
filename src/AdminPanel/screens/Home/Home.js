import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import SchoolDetailsHeader from './SchoolDetailsHeader';
import ContactHeader from './ContactHeader';
import AskYourQuestion from './AskYourQuestion';
import RateUs from './RateUs';
import EduokPrintableSample from '../EduokERP_Modules/PrintableSample/EduokPrintableSample';
import EduokErpModules from '../EduokERP_Modules/EduokErpModules';
import {ScrollView} from 'react-native-virtualized-view';
import AdminClerkModules from '../EduokERP_Modules/AdminClerkModules';
import AnnouncementHeader from './AnnouncementHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getAdminMainDashboard} from '../../../redux/Actions/GetAdminMainDashboardAction';
import Loader from '../../../Components/Loader';
import {fetchDataRequest} from '../../../redux/Slices/AdminMainDashboardSlice';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [printableSample, setPrintableSample] = useState([]);
  const [adminModules, setAdminModules] = useState([]);
  const [clerkModules, setClerkModules] = useState([]);
  const [schoolDetails, setSchoolDetails] = useState({});
  const [announcement, setAnnouncement] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.getAdminMainDashboardData);
  // const data = useSelector(state => state.adminDashboard);

  useEffect(() => {
    dispatch(getAdminMainDashboard());
  }, []);
  useEffect(() => {
    if (data?.data?.dashboard) {
      setLoading(false);
      setAdminModules(data?.data?.dashboard?.AdminModules);
      setClerkModules(data?.data?.dashboard?.ClerkAllActiveModules);
      setPrintableSample(data?.data.dashboard?.printable_sample);
      setSchoolDetails(data?.data?.dashboard?.SchoolDetails[0]);
      setAnnouncement(data?.data?.dashboard?.Announcement[0].announcement);
    }
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <SchoolDetailsHeader schoolDetails={schoolDetails} />
        <AnnouncementHeader announcement={announcement} />
        <ContactHeader />
        <AskYourQuestion />
        <RateUs />
        <EduokPrintableSample printableSample={printableSample} />
        <EduokErpModules adminModules={adminModules} />
        <AdminClerkModules clerkModules={clerkModules} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
