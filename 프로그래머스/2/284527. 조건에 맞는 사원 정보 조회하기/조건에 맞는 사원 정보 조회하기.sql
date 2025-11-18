select sum(g.SCORE) as SCORE, g.EMP_NO, e.EMP_NAME, e.POSITION, e.EMAIL 
from HR_GRADE g 
inner join HR_EMPLOYEES e on g.EMP_NO = e.EMP_NO
inner join HR_DEPARTMENT d on e.DEPT_ID = d.DEPT_ID
group by g.EMP_NO
order by SCORE desc
limit 1;