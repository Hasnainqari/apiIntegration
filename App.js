import React, { useEffect } from "react";
import { SafeAreaView, Button, View, Text } from "react-native";
import { axiosGetRequest, axiosPatchRequest, axiosPostRequest, axiosPutRequest } from "./axiosdata";







const App = () => {

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {

    // (data get ====> )

    await axiosGetRequest().then(res => {
      console.log('response ====>', res.data);
    }).catch(error => {
      console.log('error ====>', error);
    });

    // (data get ====> )

    
    // (data post ====> )

    await axiosPostRequest({
      title: 'HQ',
      desc: 'He is a React-Native Dev',
      id: 101,
    }).then(res => {
      console.log('databheja ===>', res.data);
    }).catch(error => {
      console.log(' ===>', error);
    });

    // (data post ====> )



    // (data put ====> )

    await axiosPutRequest(100, {
      title: 'HQ',
      desc: 'React_Native Dev',
      id: 100,
    }).then(res => {
      console.log('databheja ===>', res.data);
    }).catch(error => {
      console.log(' ===>', error);
    });

    // (data put ====> )


    // (data patch ====> )

    await axiosPatchRequest(100, {
      title: 'Qari',
      desc: 'He is a web developer',
    }).then(res => {
      console.log('databheja ===>', res.data);
    }).catch(error => {
      console.log(' ===>', error);
    });

    // (data patch ====> )

  };

  return (
    <SafeAreaView>
      <Button title="Fetch Api" onPress={() => { getUsers() }} />
    </SafeAreaView>
  );
}

export default App;














// const App = () => {
//   const getUsers = () => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         console.log('Data agaya:', response.data);
//       })
//       .catch(error => {
//         console.log('error:', error);
//       })
//   }

//   return (
//       <SafeAreaView>
//         <Button title="Fetch Api" onPress={() => { getUsers() }} />
//       </SafeAreaView>
//   );
// }


// export default App;