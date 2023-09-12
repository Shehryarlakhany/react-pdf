import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import europcar from '../images/europcar.jpg';
import cardesign from '../images/cardesign.jpg';

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

const PdfHeader = () => {
  return (
    <View style={{ ...styles.flex, marginBottom: 5 }}>
      <Image src={europcar} style={styles.image} />
      <Text style={styles.heading}>Return Statement</Text>
      <View>
        <Text style={styles.paragraph}>Watford</Text>
        <Text style={styles.paragraph}>247 LOWER HIGH STREET,</Text>
        <Text style={styles.paragraph}>WD17 2HN,WATFORD, United Kingdom</Text>
      </View>
    </View>
  )
}

function ReturnStatement() {

  return (
    <Document>

      {/* ========== Page 1 ========== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* ========== Header ========== */}
          <PdfHeader />

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

      {/* ========== Page 2 ========== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* ========== Header ========== */}
          <PdfHeader />

          {/* ========== Technical Fault ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Technical Fault</Text>
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

          {/* ========== Vehicle Condition ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Vehicle Condition</Text>
          </View>

          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <View style={styles.gridItem}>
                <Image src={cardesign} style={{ width: 250, height: 250 }} />
              </View>
            </View>
            <View style={{ ...styles.grid, marginTop: 50 }}>
              <View>
                <Text style={styles.paragraph}>Existing Damage</Text>
              </View>
              <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Text style={styles.paragraph}>{`1) Front Alloy - Scratch <75mm Paint`}</Text>
                <Text style={styles.paragraph}>{`2) Front Windscreen - Glass Chip 5-10mm`}</Text>
                <Text style={styles.paragraph}>{`3) Rear Bumper Ls - Scratch 75-150mm`}</Text>
                <Text style={styles.paragraph}>{`4) Front Bumper Ls - Scuffed`}</Text>
                <Text style={styles.paragraph}>{`5) Bonnet - Scratch 75-150mm`}</Text>
              </View>
              <View style={{ marginBottom: 30 }}>
                <Text style={styles.paragraph}>New Damage</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.paragraph}>Accident Notes</Text>
                <View style={{ ...styles.gridItem, margin: 0 }}>
                  <View style={{ width: '80%' }}>
                    <Text style={styles.paragraph}>{`Did an accident occur during the rental?`}</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={styles.paragraph}>NO</Text>
                  </View>
                </View>
                <View style={{ ...styles.gridItem, margin: 0 }}>
                  <View style={{ width: '80%' }}>
                    <Text style={styles.paragraph}>{`Was a Third Party involved?`}</Text>
                  </View>
                  <View style={{ width: '20%' }}>
                    <Text style={styles.paragraph}>NO</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
      </Page>

      {/* ========== Page 3 ========== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* ========== Header ========== */}
          <PdfHeader />

          {/* ========== Damage Photos ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Damage Photos</Text>
          </View>

          <View style={{ ...styles.gridContainer, height: 150 }}>
          </View>

          {/* ========== Statement Of Vehicle Return ========== */}
          <View style={styles.headerWrap}>
            <Text style={styles.header}>Statement Of Vehicle Return</Text>
          </View>

          <View>
            <Text style={styles.paragraph}>
              These signatures confirm that both parties agree the details documented in this statement of return are an accurate record of
              the vehicle condition on the date of return.
            </Text>
          </View>
          <View>
            <Text style={{ ...styles.paragraph, marginTop: 15 }}>
              Date
            </Text>
          </View>
          <View>
            <Text style={{ ...styles.paragraph, marginTop: 25 }}>
              29.08.2023 07:52
            </Text>
          </View>
          <View style={styles.gridContainer}>
            <View style={styles.grid}>
              <Text style={{ ...styles.paragraph, marginTop: 15, textAlign: 'center' }}>
                Customer Signature
              </Text>
            </View>
            <View style={styles.grid}>
              <Text style={{ ...styles.paragraph, marginTop: 15 }}>
                Signature of the station agent
              </Text>
            </View>
          </View>

        </View>
      </Page>

    </Document>
  )
}

export default ReturnStatement