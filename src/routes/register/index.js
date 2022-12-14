import React, { useState } from 'react';
import ErrorPage from '../../components/ErrorPage';
import LoadingPage from '../../components/LoadingPage';
import RegisterForm from './RegisterForm';
import SuccessPage from './SuccessPage';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [student, setStudent] = useState({
    id: '',
    title: '',
    firstName: '',
    lastName: '',
    classroom: '',
    roll: '',
    phone: '',
  });
  const [selectedBooths, setSelectedBooths] = useState([]);

  if (success) {
    return <SuccessPage student={student} />;
  } else if (!!error) {
    return <ErrorPage error={error} />;
  } else if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <RegisterForm
        student={student}
        setStudent={setStudent}
        selectedBooths={selectedBooths}
        setSelectedBooths={setSelectedBooths}
        setLoading={setLoading}
        setError={setError}
        setSuccess={setSuccess}
      />
    );
  }
};

const ClosedRegister = () => {
  return (
    <ErrorPage
      error={{
        name: 'RegistrationClosed',
        message: 'ระบบไม่เปิดให้ลงทะเบียน',
      }}
    />
  );
};

export default ClosedRegister;
