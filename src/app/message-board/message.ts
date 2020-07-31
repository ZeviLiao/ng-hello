export class Message {

  constructor(name: string, content: string) {

    this.name = name;
    this.content = content;
    this.date = new Date();

  }
  /**
   * 留言者的名稱
   *
   */
  name: string;

  /**
   * 留言的內容
   *
   */
  content: string;

  /**
   * 留言的日期
   *
   */
  date: Date;



}
