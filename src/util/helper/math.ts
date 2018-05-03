
export class mathHelper {
    constructor() {

    }

    /**
     * 表格数据格式化方法
     */
    public static GetFormatValue(coldata, i): string {
        if (i == 3 || i == 4 || i == -1) {
            return (Number.parseFloat(coldata)).toFixed(2).toString() + ' %';
        } else {
            return Math.round(Number.parseFloat(coldata)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    /**
     * 格式化版本号
     * e.g. input: '1.2.5' output: 000100020005
     * @param {string|object|number} version [要格式化的版本号]
     */
    public static versionFormat(version: any) {
        let v = version.toString();
        v = v.split('.');
        let num_place = ["", "0", "00", "000", "0000"], r = num_place.reverse();
        for (let i = 0; i < v.length; i++) {
            let len = v[i].length;
            v[i] = r[len] + v[i];
        }
        return v.join('');
    }

    /**
	 * 比较版本号
	 * @param {[stirng]} target_ver  [目标版本]
	 * @param {[string]} current_ver [当前版本]
	 * @returns {[bool]}
	 */
    public static versionCompare(target_ver, current_ver): boolean {
        let new_ver = mathHelper.versionFormat(target_ver), old_ver = mathHelper.versionFormat(current_ver);
        if (new_ver == old_ver) {
            return false;
        } else if (new_ver > old_ver) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断是否为数字
     * @param number string|number
     */
    public static isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    /**
     * 两数相除
     * @param numerator 分子
     * @param denominator 分母
     * @param decimal 精度
     * @returns string
     */
    public static div(numerator: any, denominator: any, decimal: number = 4) {
        let nu: number = mathHelper.isNumeric(numerator) ? numerator : parseFloat(numerator);
        let de: number = mathHelper.isNumeric(denominator) ? denominator : parseFloat(denominator);
        if (de == 0) {
            return 0;
        }

        return parseFloat((nu / de).toString()).toFixed(decimal);
    }

    /**
     * 两数相乘
     * @param num1 
     * @param num2 
     * @param decimal 精度
     * @returns string
     */
    public static mul(num1: any, num2: any, decimal: number = 2) {
        let nu_1: number = mathHelper.isNumeric(num1) ? num1 : parseFloat(num1);
        let nu_2: number = mathHelper.isNumeric(num2) ? num2 : parseFloat(num2);

        return parseFloat((nu_1 * nu_2).toString()).toFixed(decimal);
    }
}