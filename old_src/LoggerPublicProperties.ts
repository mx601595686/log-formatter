/**
 * 公共属性
 * 
 * @export
 * @interface LoggerPublicProperties
 */
export interface LoggerPublicProperties {
    /**
     * 将格式化后的文本打印到控制台
     */
    (...text: any[]): void;

    /**
     * 按照定义好的样式，格式化传入参数。   
     * 如果样式长度大于参数长度，则只应用对应部分，剩下的样式忽略。如果参数长度大于样式长度，则剩下的参数将应用最后一个样式
     */
    format(...text: any[]): any[];

    /**
     * 用于打印一行分隔符。    
     * 默认 char='-' , length=100
     * 
     * @memberof LoggerPublicProperties
     */
    line(char?: string, length?: number): void;

    /**
     * 将指定格式的内容打印在两条分割线中间，例如：     
     * ————————————    
     * 　　　　　text     
     * ————————————    
     * 
     * 默认 char='-' , length=100
     * 
     * @param {...any[]} text 
     * @memberof LoggerPublicProperties
     */
    lineWithText(text: string, char?: string, length?: number): void;

    /**
     * 表示通过console.warn进行输出。同时将默认输出颜色设置为黄色
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly warn: LoggerPublicProperties;

    /**
     * 表示通过console.error进行输出。同时将默认输出颜色设置为红色
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly error: LoggerPublicProperties;

    /**
     * 不显示时间输出
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly noTime: LoggerPublicProperties;

    /**
     * 不显示日期输出
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly noDate: LoggerPublicProperties;

    /**
     * 定位文本位置
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly text: LoggerPublicProperties;

    /**
     * 消息的标题，text的别名
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly title: LoggerPublicProperties;

    /**
     * 换行，相当于text='\r\n'
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly linefeed: LoggerPublicProperties;

    /**
     * 消息的正文，相当于linefeed.text 相当于'\r\n'+text
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly content: LoggerPublicProperties;

    /**
     * 用方括号包裹要输出的文本内容,相当于text='[${text}]'。    
     * 注意：方括号不会被样式影响
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly square: LoggerPublicProperties;

    /**
     * 代表消息发生的位置。相当于text.square
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly location: LoggerPublicProperties;

    /**
     * 用圆括号包裹要输出的文本内容,相当于text='(${text})'。    
     * 注意：圆括号不会被样式影响
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly round: LoggerPublicProperties;

    /**
     * 用花括号包裹要输出的文本内容,相当于text='{${text}}'。    
     * 注意：花括号不会被样式影响
     * 
     * @type {LoggerPublicProperties}
     * @memberof LoggerPublicProperties
     */
    readonly mustache: LoggerPublicProperties;

    // 下面开始是chalk的属性

    // General
    readonly reset: LoggerPublicProperties;
    readonly bold: LoggerPublicProperties;
    readonly dim: LoggerPublicProperties;
    readonly italic: LoggerPublicProperties;
    readonly underline: LoggerPublicProperties;
    readonly inverse: LoggerPublicProperties;
    readonly hidden: LoggerPublicProperties;
    readonly strikethrough: LoggerPublicProperties;

    // Text colors
    readonly black: LoggerPublicProperties;
    readonly red: LoggerPublicProperties;
    readonly green: LoggerPublicProperties;
    readonly yellow: LoggerPublicProperties;
    readonly blue: LoggerPublicProperties;
    readonly magenta: LoggerPublicProperties;
    readonly cyan: LoggerPublicProperties;
    readonly white: LoggerPublicProperties;
    readonly gray: LoggerPublicProperties;

    // Background colors
    readonly bgBlack: LoggerPublicProperties;
    readonly bgRed: LoggerPublicProperties;
    readonly bgGreen: LoggerPublicProperties;
    readonly bgYellow: LoggerPublicProperties;
    readonly bgBlue: LoggerPublicProperties;
    readonly bgMagenta: LoggerPublicProperties;
    readonly bgCyan: LoggerPublicProperties;
    readonly bgWhite: LoggerPublicProperties;
}