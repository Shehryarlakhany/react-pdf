import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import europcar from '../images/europcar.jpg';
import barcode from '../images/barcode.png';

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
  section2: {
    margin: 20,
    flexGrow: 1,
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mainHeading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 7,
  },
  image: {
    width: 130,
    height: 35,
    marginRight: 10
  },
  detailSection: {
    borderTop: '2px solid gray',
    flexDirection: 'row',
  },
  subList: {
    marginLeft: 15,
  },
  tableHead: {
    fontSize: 9,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    border: `1px solid gray`,
    height: '25px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px'
  },
  tableText: {
    fontSize: 9,
    color: 'grey',
    fontWeight: 'bold',
  },
  box: {
    borderRight: '1px solid grey',
    width: '20px',
    height: '20px'
  }
});

function RentalAgreement() {

  return (
    <Document>

      {/* ========== Page 1 ========== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          {/* ========== Header ========== */}
          <View style={{ ...styles.flex, padding: '6px 8px' }}>
            <Image src={europcar} style={styles.image} />
            <View>
              <Text style={styles.mainHeading}>Rental Agreement N 1516456/Res.N 4618488</Text>
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

          {/* ========== Detail Section 1 ========== */}
          <View style={styles.detailSection}>
            <View style={{ width: '33%', borderRight: '2px solid gray' }}>
              <View style={{ height: 250 }}>
                <Text style={styles.heading}>Personal Data</Text>
                <Text style={styles.heading}>Driver</Text>
                <Text style={styles.heading}>MR EGNAT WFGEQS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Main Driver ID</Text>
                  <Text style={styles.heading}>1234568</Text>
                </View>
                <Text style={styles.heading}>10 ROCHESTER DRIVE</Text>
                <Text style={styles.heading}>WATFORD</Text>
                <Text style={styles.heading}>WD25 9BJ GB</Text>
                <Text style={styles.heading}>UNITED KINGDOM</Text>
                <View style={{ marginTop: '10px', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Billing Address</Text>
                  <Text style={styles.heading}>875618</Text>
                </View>
                <Text style={styles.heading}>GASMARKET INTERNET PARA VENDER, S</Text>
              </View>
              <View style={{ borderTop: `2px solid gray` }}>
                <Text style={styles.heading}>Location/Time/Vehicle</Text>
                <Text style={styles.heading}>Checkout Station</Text>
                <Text style={styles.heading}>WATFORD</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Date</Text>
                  <Text style={styles.heading}>23.08.2023 10:00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Tel</Text>
                  <Text style={styles.heading}>0332564157</Text>
                </View>
                <Text style={styles.heading}>Check-in Station</Text>
                <Text style={styles.heading}>WATFORD</Text>
                <Text style={styles.heading}>247 LOWER HIGH STREET</Text>
                <Text style={styles.heading}>HERTFORDSHIRE</Text>
                <Text style={styles.heading}>WD 17 2HN WATFORD</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Date</Text>
                  <Text style={styles.heading}>23.08.2023 10:00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Tel</Text>
                  <Text style={styles.heading}>0332564157</Text>
                </View>
                <Text style={styles.heading}>Model</Text>
                <Text style={styles.heading}>VOLKSWA VWPOLO MATCH</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Imm/Reg No</Text>
                  <Text style={styles.heading}>GL21MRU</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Fuel Type</Text>
                  <Text style={styles.heading}>UNLEADED 95</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Booked Car SIPP Code</Text>
                  <Text style={styles.heading}>ECMR</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Actual Charged SIPP</Text>
                  <Text style={styles.heading}>EXMR/ECMR</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Current Miles</Text>
                  <Text style={styles.heading}>44409</Text>
                </View>
              </View>
              <View style={{ borderTop: `2px solid gray` }}>
                <Text style={styles.heading}>Note And Standard</Text>
              </View>
            </View>
            <View style={{ width: '67%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '49%', borderRight: '2px solid gray' }}>
                  <Text style={styles.heading}>Rental Conditions</Text>
                  <Text style={styles.heading}>Product: RFQ520-RM R456FQ5 LIM,MILEAGE</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.heading}>Contact</Text>
                    <Text style={styles.heading}>031346384</Text>
                  </View>
                </View>
                <View style={{ width: '49%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.heading}>Currency</Text>
                  <Text style={styles.heading}>GBP</Text>
                  <Text style={styles.heading}>Pounds Sterling</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTop: '2px solid gray', paddingLeft: '2px', paddingTop: '6px' }}>
                <View>
                  <Text style={styles.heading}>Charges</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>Damage Wavier</Text>
                  <Text style={styles.heading}>Theft Wavier</Text>
                  <Text style={styles.heading}>Licenses and Fees</Text>
                  <Text style={styles.heading}>Third Party Cover</Text>
                  <Text style={styles.heading}>VAT</Text>
                </View>
                <View>
                  <Text style={styles.heading}>No</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>4</Text>
                  <Text style={styles.heading}>4</Text>
                  <Text style={styles.heading}>4</Text>
                  <Text style={styles.heading}>4</Text>
                  <Text style={styles.heading}>20%</Text>
                </View>
                <View>
                  <Text style={styles.heading}>Unit</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>Day</Text>
                  <Text style={styles.heading}>Day</Text>
                  <Text style={styles.heading}>Day</Text>
                  <Text style={styles.heading}>Day</Text>
                  <Text style={styles.heading}></Text>
                </View>
                <View>
                  <Text style={styles.heading}>Unit Price</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>  </Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>2.16</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}> </Text>
                </View>
                <View>
                  <Text style={styles.heading}>Total Amt</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>  </Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>8.64</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}> </Text>
                </View>
                <View style={{ width: '18%' }}>
                  <Text style={styles.heading}>Total Amt inc VAT & Charges</Text>
                  <Text style={styles.heading}>  </Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}>10.37</Text>
                  <Text style={styles.heading}> </Text>
                  <Text style={styles.heading}> </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderTop: '2px solid gray', }}>
                <View style={{ width: '79%', borderRight: '2px solid gray', paddingRight: '10px' }}>
                  <Text style={styles.heading}>------- EUROPCAR TOUR 486518648641:CMR</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.heading}>AUthoris: VISA 4561654XXXXXXXXXf116 EXP:45152</Text>
                    <Text style={styles.heading}>700.00  GBP</Text>
                  </View>
                  <Text style={styles.heading}>Date:23/08/2023 08.51 / AUth Nbr 48515/ Term: ID 451156/ T-Ref: </Text>
                  <Text style={styles.heading}>Final charged amount will be convered by Carddholder issuing Bank</Text>
                </View>
              </View>
              <View style={{ borderTop: '2px solid gray', paddingLeft: '2px' }}>
                <Text style={styles.heading}>Possible Supplementary Charges</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ width: '49%', borderRight: '2px solid gray', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style={styles.heading}>Charges</Text>
                      <Text style={styles.heading}>Fuel Charges</Text>
                      <Text style={styles.heading}>Best Rent-EXT MLS</Text>
                      <Text style={styles.heading}>Excess(THW)</Text>
                    </View>
                    <View>
                      <Text style={styles.heading}>No</Text>
                      <Text style={styles.heading}>1</Text>
                      <Text style={styles.heading}>1</Text>
                      <Text style={styles.heading}>1</Text>
                    </View>
                    <View>
                      <Text style={styles.heading}>Unit</Text>
                      <Text style={styles.heading}>Rental</Text>
                      <Text style={styles.heading}>Km/M</Text>
                      <Text style={styles.heading}></Text>
                    </View>
                    <View>
                      <Text style={styles.heading}>Unit Price</Text>
                      <Text style={styles.heading}>  </Text>
                      <Text style={styles.heading}>0.17</Text>
                      <Text style={styles.heading}>1,600.00</Text>
                    </View>
                  </View>
                  <View style={{ width: '49%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style={styles.heading}>Charges</Text>
                      <Text style={styles.heading}>Fuel Charges</Text>
                      <Text style={styles.heading}>Excess(CDW)</Text>
                      <Text style={styles.heading}>Refueling</Text>
                      <Text style={styles.heading}>** PAI declined **</Text>
                    </View>
                    <View>
                      <Text style={styles.heading}>No</Text>
                      <Text style={styles.heading}></Text>
                      <Text style={styles.heading}>1</Text>
                      <Text style={styles.heading}>1</Text>
                    </View>
                    <View>
                      <Text style={styles.heading}>Unit</Text>
                      <Text style={styles.heading}>Litres</Text>
                      <Text style={styles.heading}></Text>
                      <Text style={styles.heading}></Text>
                    </View>
                    <View>
                      <Text style={styles.heading}>Unit Price</Text>
                      <Text style={styles.heading}>1.74</Text>
                      <Text style={styles.heading}>1,600.00</Text>
                      <Text style={styles.heading}>18.00</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ borderTop: '2px solid gray', paddingLeft: '2px' }}>
                <Text style={styles.heading}>Data Protection Declaration</Text>
                <Text style={styles.paragraph}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </View>
              <View style={{ height: 230, borderTop: '2px solid gray', paddingLeft: '2px' }}>
                <Text style={styles.heading}>PERSONAL DATA</Text>
                <Text style={styles.paragraph}>
                  It is a long established fact that a reader will be distracted by the readable
                </Text>
                <Text style={{ ...styles.heading, marginTop: '10px' }}>
                  My Email Address is: __________________________________
                </Text>
                <Text style={{ ...styles.heading, marginTop: '10px' }}>
                  My Contact Telephone Number is: __________________________________
                </Text>
                <Text style={{ ...styles.heading, marginTop: '10px' }}>
                  Signature X: __________________________________
                </Text>
              </View>
              <View style={{ marginLeft: '50px', marginBottom: '15px' }}>
                <Image src={barcode} style={styles.image} />
              </View>
              <View style={{ borderTop: '2px solid gray', padding: '4px 8px' }}>
                <Text style={styles.paragraph}>
                  There are many variations of passages of Lorem Ipsum available, but the majority have
                </Text>
                <View style={{ flexDirection: 'row', marginTop: '20px' }}>
                  <View style={{ width: '49%' }}>
                    <Text style={styles.paragraph}>Signature</Text>
                  </View>
                  <View style={{ width: '49%' }}>
                    <Text style={styles.paragraph}>Signature</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ========== Detail Section 2 ========== */}
          <View style={styles.detailSection}>
            <View style={{ width: '33%', borderRight: '2px solid gray', padding: '2px 4px' }}>
              <Text style={styles.heading}>Vehicle Detail - Checkout</Text>
              <Text style={styles.paragraph}>Fuel Type</Text>
              <Text style={{ ...styles.paragraph, marginBottom: '6px' }}>E_1/6_|_|_4/8_|_|_7/8_F</Text>
              <Text style={styles.paragraph}>O readable content of a page when looking</Text>
              <Text style={styles.paragraph}>O readable content of a page when looking</Text>
              <Text style={styles.paragraph}>Other (Specify) _______________________________</Text>
              <Text style={styles.paragraph}>O Clean inside and outside</Text>
              <Text style={{ ...styles.paragraph, marginTop: '4px' }}>
                it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
              </Text>
            </View>
            <View style={{ width: '67%', flexWrap: 'wrap', flexDirection: 'row' }}>
              <View style={{ width: '50%', padding: '2px 4px', borderRight: '2px solid gray', borderBottom: '2px solid gray', }}>
                <Text style={styles.paragraph}>O EXISTING DAMAGE</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.paragraph, width: '10%' }}>2</Text>
                  <Text style={styles.paragraph}>using Lorem Ipsum is that</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.paragraph, width: '10%' }}>1L</Text>
                  <Text style={styles.paragraph}>using Lorem Ipsum is that</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.paragraph, width: '10%' }}>14</Text>
                  <Text style={styles.paragraph}>using Lorem Ipsum is that</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.paragraph, width: '10%' }}>308</Text>
                  <Text style={styles.paragraph}>using Lorem Ipsum is that</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ ...styles.paragraph, width: '10%' }}>13L</Text>
                  <Text style={styles.paragraph}>using Lorem Ipsum is that</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '10px' }}>
                  <Text style={styles.paragraph}>Signature</Text>
                </View>
              </View>
              <View style={{ width: '50%', padding: '2px 4px' }}>
                <Text style={styles.paragraph}>Vehicle Details - Check In</Text>
                <Text style={styles.paragraph}>Fuel Type</Text>
                <Text style={{ ...styles.paragraph, marginBottom: '6px' }}>E_1/6_|_|_4/8_|_|_7/8_F</Text>
                <Text style={styles.paragraph}>O readable content of a page when looking</Text>
                <Text style={styles.paragraph}>O readable content of a page when looking</Text>
                <Text style={styles.paragraph}>Other (Specify) _______________________________</Text>
                <Text style={styles.paragraph}>O Clean inside and outside</Text>
              </View>
              <View style={{ width: '50%', padding: '2px 4px' }}>
                <Text style={{ ...styles.heading, marginBottom: '5px' }}>New Damage Identified</Text>
                <Text style={styles.paragraph}>For new damage identified please complete an</Text>
                <Text style={styles.paragraph}>Accident Damage Report</Text>
              </View>
              <View style={{ width: '50%', padding: '2px 4px' }}>
                <Text style={{ ...styles.paragraph, marginBottom: '10px' }}>Station</Text>
                <Text style={{ ...styles.paragraph, marginBottom: '10px' }}>Date/Time</Text>
                <Text style={{ ...styles.paragraph, marginBottom: '20px' }}>Mls</Text>
              </View>
              <View style={{ width: '50%', padding: '2px 4px' }}>
                <Text style={styles.paragraph}>Signature</Text>
              </View>
              <View style={{ width: '50%', padding: '2px 4px' }}>
                <Text style={styles.paragraph}>Signature</Text>
              </View>
            </View>
          </View>

        </View>
      </Page>

      {/* ========== Page 2 ========== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section2}>

          {/* ========== Additional Optional Products ========== */}
          <Text style={{ fontSize: 18, fontWeight: 'extrabold', color: 'grey', textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'grey' }}>Additional Optional Products</Text>
          <View style={{ margin: '10px 0px' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                The products listed on this page below are additional optional products that we offer to enhance your rental experience.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                The cost (inclusive of VAT) for any additional optional products you chose to buy at the booking stage (if any) will be
              </Text>
            </View>
            <View style={{ ...styles.subList, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                Shown on the Rental Agreement overleaf and included in the Rental Price Estimated; and
              </Text>
            </View>
            <View style={{ ...styles.subList, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                be included in any prepayment you may have made at the booking stage (if any); and
              </Text>
            </View>
            <View style={{ ...styles.subList, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                will not be refundable when you return the Vehicle to us
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                The cost (inclusive of VAT) for any additional optional products you choose to buy at pick up will be:
              </Text>
            </View>
            <View style={{ ...styles.subList, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                Shown on the Rental Agreement overleaf and included in the Rental Price Estimated; and
              </Text>
            </View>
            <View style={{ ...styles.subList, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                be included in any prepayment you may have made at the booking stage (if any); and
              </Text>
            </View>
            <View style={{ ...styles.subList, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'grey', marginRight: 10 }}>•</Text>
              <Text style={{ ...styles.paragraph, color: 'grey' }}>
                will not be refundable when you return the Vehicle to us
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 10, fontWeight: 'extrabold', color: 'grey', margin: '6px 0px' }}>VEHICLE UPGRADE</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5px' }}>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}>Product</Text>
              <Text style={styles.tableHead}>Number</Text>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>1</Text>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}> </Text>
              <Text style={styles.tableHead}>Vehicle Upgrade from</Text>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}> </Text>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}> </Text>
              <Text style={styles.tableHead}>Vehicle Upgrade to</Text>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}> </Text>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}> </Text>
              <Text style={styles.tableHead}>Number of days</Text>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}> </Text>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}>Vehicle Upgrade</Text>
              <Text style={styles.tableHead}>DAILY RATE</Text>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}>Vehicle Upgrade</Text>
              <Text style={styles.tableHead}>TOTAL CHARGE</Text>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
            </View>
          </View>
          <Text style={{ ...styles.heading, color: 'grey', marginTop: '5px' }}>
            I agree to this upgrade. I accept that my original booked vehicle was available but I have chosen to pay extra for a different one
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 'extrabold', color: 'grey', margin: '10px 0px' }}>OTHER AVAILABLE OPTIONAL PRODUCTS</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: '5px 0px' }}>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}>Product</Text>
              <Text style={styles.tableHead}>Number</Text>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>2</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>3</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>4</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>5</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>6</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>7</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>8</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>10</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>11</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>12</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>13</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>14</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableText}>15</Text>
              </View>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles.tableHead}> </Text>
              <Text style={styles.tableHead}>PRODUCT</Text>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <View>
                  <Text style={styles.tableText}>Collision Damage Wavier</Text>
                  <Text style={{ ...styles.tableText, fontSize: 7 }}>(Collision Damage Wavier)</Text>
                </View>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <View>
                  <Text style={styles.tableText}>Collision Damage Wavier</Text>
                  <Text style={{ ...styles.tableText, fontSize: 7 }}>(Collision Damage Wavier)</Text>
                </View>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>Collision Damage Wavier</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <View>
                  <Text style={styles.tableText}>Collision Damage Wavier</Text>
                  <Text style={{ ...styles.tableText, fontSize: 7 }}>(Collision Damage Wavier)</Text>
                </View>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}> </Text>
              <Text style={styles.tableHead}>DAILY RATE</Text>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
            </View>
            <View style={{ width: '17%' }}>
              <Text style={styles.tableHead}>TOTAL PRODUCT</Text>
              <Text style={styles.tableHead}>CHARGE</Text>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
              <View style={{ ...styles.tableCell, justifyContent: 'flex-start' }}>
                <Text style={styles.tableText}>£</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '8px 0px' }}>
            <View>
              <Text style={styles.tableHead}>
                Product
              </Text>
              <Text style={styles.tableHead}>
                Number
              </Text>
            </View>
            <View style={{ border: '1px solid grey', flexDirection: 'row' }}>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={styles.box}></View>
              <View style={{ ...styles.box, border: 'none' }}></View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', margin: '8px 0px' }}>
            <View style={{ width: '50%', padding: '2px 4px', borderRight: '1px dashed gray' }}>
              <Text style={{ ...styles.heading, color: 'grey', height: '50px' }}>
                I have explained all of the additional optional products chosen by the customer referenced by product number in the grid above.
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0px' }}>
                <View>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Europcar Agent
                  </Text>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Print Name
                  </Text>
                </View>
                <Text style={{ ...styles.heading, color: 'grey' }}>
                  _____________________________________
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0px' }}>
                <View>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Europcar Agent
                  </Text>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Signature
                  </Text>
                </View>
                <Text style={{ ...styles.heading, color: 'grey' }}>
                  _____________________________________
                </Text>
              </View>
            </View>
            <View style={{ width: '50%', padding: '2px 4px' }}>
              <Text style={{ ...styles.heading, color: 'grey', height: '50px' }}>
                I confirm that I have chosen to buy the additional optional products referenced by product number in the grid above (in addition to those I included in my reservation (if any); and that I agree and will pay the total charges stated for them both here and overleaf.
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0px' }}>
                <View>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Customer
                  </Text>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Print Name
                  </Text>
                </View>
                <Text style={{ ...styles.heading, color: 'grey' }}>
                  _____________________________________
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0px' }}>
                <View>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Europcar Agent
                  </Text>
                  <Text style={{ ...styles.heading, color: 'grey' }}>
                    Signature
                  </Text>
                </View>
                <Text style={{ ...styles.heading, color: 'grey' }}>
                  _____________________________________
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

    </Document>
  )
}

export default RentalAgreement