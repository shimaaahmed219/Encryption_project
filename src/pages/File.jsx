import { PDFDownloadLink, Document, Page, Text, View,Image } from '@react-pdf/renderer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../components/URL';

const MyDocument = () => {
  const [client, setClient] = useState({});
  useEffect(() => {
    axios
      .get(`${url}/client/43`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setClient(res.data.data);
      });
  }, []);
console.log("client",client.photo);
  return (
    <Document>
      <Page size="A4" style={{ flexDirection: 'row', padding: 20 ,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <View style={{ margin: 50, padding: 10, flexGrow: 1 }}>
        {client.image && (
            <Image 
              src={`https://epassport-api.preview-ym.com/${client.photo}`}
              style={{ width: 150, height: 150, marginBottom: 20 }}
            />
          )}
        <Text>{client.age}</Text>
          <Text>{client.first_name}</Text>
          {/* <View style={{ width: 100, height: 100, backgroundColor: 'black' }} /> */}
        </View>
      </Page>
    </Document>
  );
}

const File = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
        {({ loading }) => (
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            {loading ? 'تحميل...' : 'تحويل إلى PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}

export default File;
