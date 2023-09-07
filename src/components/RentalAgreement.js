import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import europcar from '../images/europcar.jpg';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  section: {
    margin: 15,
    flexGrow: 1,
    flex: 1,
    border: '2px solid gray',
    borderRadius: '5px',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 8,
  },
  image: {
    width: 130,
    height: 35,
    marginRight: 10
  },
  detailSection: {
    borderTop: '2px solid gray',
    flexDirection: 'row',
  }
});

function RentalAgreement() {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* ========== Header ========== */}
          <View style={{ ...styles.flex, padding: '6px 8px' }}>
            <Image src={europcar} style={styles.image} />
            <View>
              <Text style={styles.heading}>Rental Agreement N 1516456/Res.N 4618488</Text>
              <View style={{ ...styles.flex, justifyContent: 'space-between' }}>
                <View style={{ width: '33%' }}>
                  <Text style={styles.paragraph}>Europcar Group UK Limited</Text>
                  <Text style={styles.paragraph}>VAT No. GB 84132648 Reg</Text>
                  <Text style={{ ...styles.paragraph, marginTop: 10 }}>Customer Services: 487 845 87945</Text>
                </View>
                <View>
                  <Text style={styles.paragraph}>1 Great Central Square, leiestire, EL 11</Text>
                  <Text style={styles.paragraph}>Website: www.europcar.co.uk</Text>
                  <Text style={styles.paragraph}>Amendments & enquires: 0374 4458 616</Text>
                  <Text style={styles.paragraph}>Email: customerservices@europcar.com</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ========== Detail ========== */}
          <View style={styles.detailSection}>
            <View style={{ width: '30%', borderRight: '2px solid gray' }}>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>
              <Text style={styles.heading}>Personal Data</Text>

            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default RentalAgreement