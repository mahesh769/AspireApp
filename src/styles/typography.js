import { moderateScale } from 'react-native-size-matters';
import { textScale } from './responsiveStyles';


export const fontNames = {
    FONT_FAMILY_BLACK: "AvenirLTStd-Black",
    FONT_FAMILY_BOLD: "AvenirLTStd-Black",
    FONT_FAMILY_EXTRA_BOLD: "AvenirLTStd-Black",
    FONT_FAMILY_REGULAR: "AvenirLTStd-Medium",
    FONT_FAMILY_SEMI_BOLD: "AvenirLTStd-Book",
    FONT_FAMILY_MEDIUM: "AvenirLTStd-Medium",
    FONT_FAMILY_HEAVY: "AvenirLTStd-Heavy",
    FONT_FAMILY_ROMAN: "AvenirLTStd-Roman"
}

export const typography = {
    FONT_SIZE_24: textScale(24),
    FONT_SIZE_22: textScale(22),
    FONT_SIZE_20: textScale(20),
    FONT_SIZE_18: textScale(18),
    FONT_SIZE_16: textScale(16),
    FONT_SIZE_14: textScale(14),
    FONT_SIZE_12: textScale(12),
    FONT_SIZE_40: textScale(40),

    LINE_HEIGHT_14: moderateScale(14),
    LINE_HEIGHT_16: moderateScale(16),
    LINE_HEIGHT_18: moderateScale(18),
    LINE_HEIGHT_20: moderateScale(20),
    LINE_HEIGHT_22: moderateScale(22),
    LINE_HEIGHT_24: moderateScale(24),
    LINE_HEIGHT_28: moderateScale(28),
    LINE_HEIGHT_30: moderateScale(30),
    LINE_HEIGHT_32: moderateScale(32),
    LINE_HEIGHT_40: moderateScale(40),
}
