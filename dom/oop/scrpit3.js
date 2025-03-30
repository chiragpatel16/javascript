class Student {
    #roll_no;
    #name;
    #age;
    #std;
    #percentage;

    set(roll_no, name, age, std, percentage) {
        this.#roll_no = roll_no;
        this.#name = name;
        this.#age = age;
        this.#std = std;
        this.#percentage = percentage;
    }

    print() {
        document.writeln(this.#roll_no),
        document.writeln  (this.#name),
        document.writeln (this.#age), 
        document.writeln(this.#std);
        document.writeln(this.#percentage);
    }
}

const student1 = new Student();
student1.set(101, "Chirag", 21, "12th", 80,);
student1.print();

const student2 = new Student
student2.set(102, "Nick ", 20, "12th", 50,);
student2.print();

const student3 = new Student
student3.set(103, "nikita", 19, "11th", 90);
student3.print();