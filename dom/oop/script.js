class Employee { 
    id;
    name;
    salary;
     role;

    set(id, name, salary, role) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.role = role;
    }

     print() {
        document.writeln (this.id),
        document.writeln (this.name),
        document.writeln(this.salary),
        document.writeln(this.role);
    }
};

const emp1 = new Employee();
emp1.set(1, ' chirag ', 700000, ' HR  <br> ');
emp1.print();

const emp2 = new Employee();
emp2.set(2, ' harry ', 70000, ' manager <br> ');
emp2.print();

const emp3 = new Employee();
emp3.set(3, ' nikita ', 70000, ' Head ');
emp3.print();