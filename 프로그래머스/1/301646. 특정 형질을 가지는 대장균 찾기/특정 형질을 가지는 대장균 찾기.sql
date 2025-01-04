-- 코드를 작성해주세요
select count(*) as count from ECOLI_DATA where bin(GENOTYPE) not like "%1_" and (bin(GENOTYPE) like "%1"or(bin(GENOTYPE) like "%1__"));