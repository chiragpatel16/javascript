class School {
    constructor(sch_name, sch_year) {
        this.sch_name = sch_name;
        this.sch_year = sch_year
    }

    print() {
        document.writeln(`School Name: ${this.sch_name}<br>School Established Year: ${this.sch_year}<br><br>`);
    }
};

class Student extends School {
    constructor(sch_name, sch_year, stdt_name, stdt_std, stdt_year) {
        super(sch_name, sch_year);
        this.stdt_name = stdt_name;
        this.stdt_std = stdt_std;
        this.stdt_year = stdt_year;
    }

    print() {
        super.print();
        document.writeln(this.sch_name),
        document.writeln  (this.sch_year),
        document.writeln (this.stdt_name), 
        document.writeln(this.stdt_std);
        document.writeln(this.sch_year);
    }
};

const school = new School("M.M.P.S", 2007);
const student = new Student("M.M.P.S", 2007, "Chirag", 10, 19);

student.print();