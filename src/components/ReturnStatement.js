import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import europcar from '../images/europcar.jpg';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 10,
  },
  image: {
    width: 130,
    height: 35,
  },
  headerWrap: {
    margin: '10px 0px',
  },
  header: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 12,
    padding: 5,
    textAlign: 'center'
  },
  gridContainer: {
    flexDirection: 'row'
  },
  grid: {
    flexBasis: '50%',
    width: '49%',
  },
  gridItem: {
    margin: '5px 0px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
});

function ReturnStatement() {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* ========== Header ========== */}
          <View style={{ ...styles.flex, marginBottom: 5 }}>
            <Image src={europcar} style={styles.image} />
            <Text style={styles.heading}>Return Statement</Text>
            <View>
              <Text style={styles.paragraph}>Watford</Text>
              <Text style={styles.paragraph}>247 LOWER HIGH STREET,</Text>
              <Text style={styles.paragraph}>WD17 2HN,WATFORD, United Kingdom</Text>
            </View>
          </View>

          {/* ========== Vehicle Details ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Vehicle Details</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Reg No.</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>FSW845</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>UNit No.</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>231053412</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Model</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>VWPOLO MATCH</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Fuel Type</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>UNLEADED 95</Text>
                </View>
              </View>
            </View>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Rental No.</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>4512215648</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Cutomer</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>EGNAT</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ========== Rental Details ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Rental Details</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Return Station</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>Watford</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Return Date</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>29.08.2023 07:51</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Charge Return Date</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>29.08.2023 07:51</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Pickup Date</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>29.08.2023 07:51</Text>
                </View>
              </View>
            </View>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Pickup Mileage</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>44409</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Return Mileage</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>44948</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Mileage Driven</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>539</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ========== Fuel Details ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Fuel Details</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>Return Fuel Level</Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}>8/8</Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}></Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}></Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}></Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}></Text>
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}></Text>
                </View>
                <View style={{ width: '70%' }}>
                  <Text style={styles.paragraph}></Text>
                </View>
              </View>
            </View>
          </View>

          {/* ========== Special Equipment Details ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Special Equipment Details</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>NO</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ========== Vehicle Options ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Vehicle Options</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <View style={{ width: '30%' }}>
                  <Text style={styles.paragraph}>NO</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default ReturnStatement