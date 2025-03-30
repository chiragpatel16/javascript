class Indian {
    constructor(adharNo, birthPlace) {
        this.adharNo = adharNo;
        this.birthPlace = birthPlace;
    }
}

class Person extends Indian {
    constructor(adharNo, birthPlace, name, age, gender) {
        super(adharNo, birthPlace);
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Employee extends Person {
    constructor(adharNo, birthPlace, name, age, gender, id, salary, role) {
        super(adharNo, birthPlace, name, age, gender);
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    print() {
    document.writeln(this.adharNo);
    document.writeln(this.birthPlace);
    document.writeln(this.name);
    document.writeln(this.age);
    document.writeln(this.gender);
    document.writeln(this.id);
    document.writeln(this.salary);
    document.writeln(this.role);
    }
}

const emp1 = new Employee(123456789012, "Surat", "Chirag", 21, "Male", 108, 70000, "Developer <br>");
const emp2 = new Employee(987654321098, "Mumbai", "harry", 20, "Male", 111, 60000, "Manager <br>");
const emp3 = new Employee(564738291012, "Delhi", "nikita", 21, "feMale", 122, 70000, "Designer <br>");

emp1.print();
emp2.print();
emp3.print();
