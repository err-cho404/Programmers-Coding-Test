-- 코드를 입력하세요
SELECT a.TITLE,b.BOARD_ID,b.REPLY_ID,b.WRITER_ID,b.CONTENTS,left(b.CREATED_DATE,10) as CREATED_DATE 
from USED_GOODS_BOARD a join USED_GOODS_REPLY b on a.BOARD_ID = b.BOARD_ID 
where a.CREATED_DATE like "2022-10-%" 
order by b.CREATED_DATE,a.TITLE;