select (COUNT(branchNo)/COUNT(distinct branchNo)) into @n from Staff;

select distinct branchNo,(COUNT(branchNo) - @n) as `staffDiff` from Staff s group by branchNo having COUNT(branchNo) > @n;