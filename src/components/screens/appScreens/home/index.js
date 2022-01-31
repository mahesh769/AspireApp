import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { textScale } from '../../../../styles/responsiveStyles';
import { spacing } from '../../../../styles/spacing';
import { fontNames } from '../../../../styles/typography';
import Strings from '../../../../translation/language';
import * as Utils from '../../../../utility';
import colors from '../../../../utility/Colors';
import { navigate } from '../../../../utility/commonFunctions';
import { Images } from '../../../../utility/imageRes';
import CommonImage from '../../../common/CommonImage';
import Header from '../../../common/headers/Header';
import RegularText from '../../../common/RegularText';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getQuickCategoriesAction } from '../../../../redux/actions/categoryActions';
import GradiantProgressBar from '../../../common/progressBars/gradiantProgressBar';



const HomeScreen = () => {
    const dispatch = useDispatch();

    const { homeRes } = useSelector(state => ({
        homeRes: state.homeReducer.homeRes,
        ishomeSuccess: state.homeReducer.ishomeSuccess,
        homeFetching: state.homeReducer.homeFetching,
        homeError: state.homeReducer.homeError,
    }), shallowEqual)

    function rightClick() {
        navigate(Utils.Constants.SCREEN_NOTIFICATIONS, {})
    }


    useEffect(() => {
        if (homeRes == undefined) {
            getQuickCategory()
        }

    }, [homeRes])

    function getQuickCategory() {
        dispatch(getQuickCategoriesAction())
    }


    return (
        <View style={styles.container}>
            <Header rightClick={rightClick} rightImage={Images.IMG_TOP_ICON} />
            <View style={styles.topContainer} >
                <View style={styles.topCurve} >
                    <RegularText title={Strings.dabit_card} fontFamily={fontNames.FONT_FAMILY_BOLD} textStyle={{
                        fontSize: textScale(22), marginTop: spacing.MARGIN_20, color: colors.white,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        paddingHorizontal: spacing.PADDING_20
                    }} />
                    <RegularText title={Strings.aviable_balance} fontFamily={fontNames.FONT_FAMILY_BOLD} textStyle={{
                        fontSize: textScale(16), marginTop: spacing.MARGIN_20, color: colors.white,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        paddingHorizontal: spacing.PADDING_20
                    }} />
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: spacing.PADDING_20, marginTop: spacing.MARGIN_10, justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-start',
                    }}>
                        <RegularText title={"s$"} fontFamily={fontNames.FONT_FAMILY_BOLD} textStyle={{
                            fontSize: textScale(16), color: colors.white,

                            backgroundColor: colors.theme_se,
                            paddingVertical: spacing.PADDING_2,
                            paddingHorizontal: spacing.PADDING_10,
                            borderRadius: spacing.MARGIN_4
                        }} />
                        <RegularText title={homeRes && homeRes.available_bal} fontFamily={fontNames.FONT_FAMILY_BOLD} textStyle={{
                            fontSize: textScale(16), color: colors.white,
                            paddingHorizontal: spacing.PADDING_10
                        }} />
                    </View>
                </View>
            </View>


            <ScrollView contentContainerStyle={styles.bottomCurve}
                style={{ width: '100%', position: 'absolute', height: spacing.FULL_HEIGHT, }}>
                <View style={{
                    alignItems: 'center', justifyContent: 'center', paddingTop: spacing.HEIGHT_226, zIndex: 1, position: 'relative',
                }}>
                    {/*  card data render start */}
                    <View style={{ paddingVertical: spacing.PADDING_15, width: '90%', }}>

                        <View style={{
                            borderRadius: spacing.PADDING_4, width: '45%', paddingBottom: spacing.PADDING_20, paddingTop: spacing.PADDING_4, alignItems: 'flex-start',
                            justifyContent: 'flex-start', zIndex: 0, right: 0, paddingLeft: 10,
                            top: -10, position: 'absolute', backgroundColor: colors.white, flexDirection: 'row'
                        }}>
                            <CommonImage source={Images.IMG_EYE} style={{ width: spacing.WIDTH_20, height: spacing.WIDTH_20 }} />
                            <RegularText
                                title={"Hide card number"}
                                textStyle={{
                                    textAlign: 'left',
                                    color: colors.theme_se, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                }}
                            />
                        </View>

                        <View style={{
                            backgroundColor: colors.white, padding: 10,
                            width: '100%', alignSelf: 'center',
                            backgroundColor: colors.theme_se, height: spacing.HEIGHT_230, borderRadius: spacing.MARGIN_12,

                        }}>
                            <CommonImage source={Images.IMG_ASPIRE} style={{ width: spacing.WIDTH_84, height: spacing.WIDTH_50, alignSelf: 'flex-end' }} />
                            <RegularText
                                title={homeRes && homeRes.card_holdername}
                                textStyle={{
                                    textAlign: 'left',
                                    color: colors.white, fontSize: textScale(22), paddingHorizontal: spacing.PADDING_10
                                }}
                            />
                            <RegularText
                                title={homeRes && homeRes.card_number}
                                textStyle={{
                                    textAlign: 'left',
                                    color: colors.white, fontSize: textScale(16), paddingHorizontal: spacing.PADDING_10, marginTop: 15
                                }}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <RegularText
                                    title={"Thru: " + (homeRes && homeRes.expairty_date)}
                                    textStyle={{
                                        textAlign: 'left',
                                        color: colors.white, fontSize: textScale(16), paddingHorizontal: spacing.PADDING_10, marginTop: 10
                                    }}
                                />
                                <RegularText
                                    title={"CVV: " + (homeRes && homeRes.cvv)}
                                    textStyle={{
                                        textAlign: 'left',
                                        color: colors.white, fontSize: textScale(16), paddingHorizontal: spacing.PADDING_10, marginTop: 10
                                    }}
                                />
                            </View>
                            <CommonImage source={Images.IMG_VISA} style={{ width: spacing.WIDTH_60, height: spacing.WIDTH_50, alignSelf: 'flex-end' }} />
                        </View>

                    </View>
                    {/*  card data render end */}
                </View>


                <View style={{
                    paddingHorizontal: spacing.PADDING_20,
                    paddingTop: (spacing.HEIGHT_226 + spacing.HEIGHT_270), zIndex: 1, position: 'absolute', height: 100, zIndex: 1, width: '100%'
                }} >
                    <View style={{ flexDirection: 'row', height: spacing.HEIGHT_20, marginBottom: 5, justifyContent: 'space-between' }}>
                        <RegularText
                            title={"Debit card spanding limit"}
                            textStyle={{
                                textAlign: 'left',
                                color: colors.black, fontSize: textScale(16), paddingHorizontal: spacing.PADDING_10,
                            }}
                        />
                        <RegularText
                            title={(homeRes && (homeRes.spent_limit + " | " + homeRes.debit_card_limit))}
                            textStyle={{
                                textAlign: 'left',
                                color: colors.theme_se, fontSize: textScale(16), paddingHorizontal: spacing.PADDING_10,
                            }}
                        />
                    </View>
                    <GradiantProgressBar progress={0.2} />
                </View>


                {/*  history data render start */}
                <View style={{ marginBottom: spacing.HEIGHT_56, alignItems: 'center', marginTop: -spacing.HEIGHT_160, }}>

                    {
                        homeRes && homeRes.history.map((item, index) => (
                            <View style={[{
                                paddingHorizontal: spacing.PADDING_20, backgroundColor: colors.white, flexDirection: 'row',
                                alignItems: 'center', paddingVertical: spacing.PADDING_15, width: '100%'
                            }, index == 0 && {
                                borderTopLeftRadius: spacing.MARGIN_30,
                                borderTopRightRadius: spacing.MARGIN_30, paddingTop: spacing.HEIGHT_260,
                            }]}>
                                <View style={{ width: spacing.WIDTH_40, height: spacing.WIDTH_40, alignItems: 'center', justifyContent: 'center', borderRadius: (spacing.WIDTH_40) / 2, backgroundColor: colors.theme }}>
                                    <CommonImage source={Images.IMG_STAR_GREEN} style={{ tintColor: colors.white, }} />
                                </View>
                                <View style={{ flexDirection: 'column', flex: .8 }}>
                                    <RegularText
                                        title={item.title}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.appBlack, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
                                    <RegularText
                                        title={item.subtitle}
                                        textStyle={{
                                            textAlign: 'left',
                                            color: colors.grey400, fontSize: textScale(12), paddingHorizontal: spacing.PADDING_10
                                        }}
                                    />
                                </View>
                                {item.isToggele && <View style={{ alignItems: 'flex-end', flex: .2, }}>
                                    <CommonImage source={item.source} style={{ width: spacing.WIDTH_46, height: spacing.WIDTH_46 }} />
                                </View>}
                            </View>
                        ))
                    }
                </View>
                {/*  history data render end */}

            </ScrollView >



        </View >
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.theme },
    scrollStyle: {},
    topContainer: {
        height: 260,
    },
    topCurve: {
        backgroundColor: colors.theme,
        height: 260,
    },
    bottomCurve: {
        width: '100%',

    },
});

export default HomeScreen;