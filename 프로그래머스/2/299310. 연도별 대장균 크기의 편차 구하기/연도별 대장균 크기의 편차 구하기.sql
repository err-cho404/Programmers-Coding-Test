select 
    year(DIFFERENTIATION_DATE) as YEAR,
    MAXSIZE - SIZE_OF_COLONY as YEAR_DEV,
    ID 
    from ECOLI_DATA e join
        (select 
            year(DIFFERENTIATION_DATE) as YEAR,
            max(SIZE_OF_COLONY) as MAXSIZE
            from ECOLI_DATA 
            group by year(DIFFERENTIATION_DATE)) d
    where YEAR = year(DIFFERENTIATION_DATE) 
    order by YEAR, YEAR_DEV