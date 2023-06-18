import {useEffect, useState} from 'react';
import {RequestModel, User} from '../../types';
import {getUsers} from '../../api/users';
import {FlatList} from 'react-native';
import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import NetworkConnectionError from '../../components/no_network';
import UserSection from '../../components/user_card';

const DisplayUsers = ({}) => {
  const [isConnected, setConnectionState] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnectionState(state.isConnected ?? false);
    });
    fetchUsers();
    return () => {
      unsubscribe();
    };
  }, []);

  const fetchUsers = async () => {
    getUsers().then((data: RequestModel) => {
      setUsers(data.items);
    });
  };

  return (
    <>
      {isConnected ? (
        <FlatList
          data={users}
          horizontal={false}
          renderItem={({item}) => {
            const user: User = item as User;
            return <UserSection user={user} />;
          }}
        />
      ) : (
        <NetworkConnectionError />
      )}
    </>
  );
};

export default DisplayUsers;
