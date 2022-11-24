create database hip;

use hip;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table quiz (
id int auto_increment,
fkUsuario int, foreign key (fkUsuario) references usuario(id),
primary key (id, fkUsuario),
dtHora datetime default current_timestamp,
pontos int
);

create table rankQuiz (
id int auto_increment,
pontos int,
fkQuiz int, foreign key (fkQuiz) references quiz(id),
fkUsuario int, foreign key (fkUsuario) references usuario(id),
primary key(id,fkQuiz,fkUsuario)
);

insert into rankQuiz values
(null,50,1,1);

select * from usuario join quiz
on usuario.id = fkUsuario
join rankQuiz 
on quiz.id = fkQuiz;


select * from usuario;

select * from quiz;

select * from rankQuiz;